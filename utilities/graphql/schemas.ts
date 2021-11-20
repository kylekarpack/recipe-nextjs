
import elasticsearch from "elasticsearch";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { composeWithElastic } from "graphql-compose-elasticsearch";
import recipeMapping from "../elasticsearch/recipeMapping";

const search = composeWithElastic({
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
	],
});

export const typeDefs = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			search: search.getResolver("search").getFieldConfig()
		},
	}),
});

export default typeDefs;