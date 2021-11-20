import elasticsearch from "elasticsearch";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { composeWithElastic } from "graphql-compose-elasticsearch";
import recipeMapping from "../elasticsearch/recipeMapping";

declare global {
  var typeDefs: GraphQLSchema;
}

export const getTypeDefs = () => {
  if (global.typeDefs) {
    return typeDefs;
  }

  const compose = composeWithElastic({
    graphqlTypeName: "recipe",
    elasticIndex: "recipe",
    elasticType: "recipe",
    elasticMapping: recipeMapping,
    elasticClient: new elasticsearch.Client({
      host: process.env.ELASTICSEARCH_HOST,
      apiVersion: process.env.ELASTICSEARCH_VERSION,
      ssl: {
        rejectUnauthorized: false,
        pfx: []
      }
    }),
    // elastic mapping does not contain information about is fields are arrays or not
    // so provide this information explicitly for obtaining correct types in GraphQL
    pluralFields: [
      "recipeIngredientGroups.recipeIngredients",
      "recipeIngredientGroups",
      "recipeReviewables",
      "instructions",
      "asides",
      "relateds"
    ]
  });

  const search = compose.getResolver("search").getFieldConfig();
  const findById = compose.getResolver("findById").getFieldConfig();

  global.typeDefs = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: {
        search,
        findById
      }
    })
  });
  return global.typeDefs;
};
