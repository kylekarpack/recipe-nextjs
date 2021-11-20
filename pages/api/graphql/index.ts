import { ApolloServer, gql } from "apollo-server-micro";
import { resolvers, typeDefs } from "utilities/graphql";

const apolloServer = new ApolloServer({
  schema: typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
