import { ApolloServer } from "apollo-server-micro";
import { getTypeDefs } from "utilities/graphql/schemas";

const apolloServer = new ApolloServer({
  schema: getTypeDefs(),
  introspection: true,
  playground: true
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
