import { ApolloServer } from "apollo-server-micro";
import typeDefs from "utilities/graphql/schemas";

const apolloServer = new ApolloServer({
  schema: typeDefs,
  introspection: true,
  playground: true
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
