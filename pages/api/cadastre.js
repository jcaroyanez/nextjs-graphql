import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors"
import typeDefs from '../../api-resources/definitions/queries';
import resolvers from '../../api-resources/resolvers/cadastre';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start()

const cors = Cors();

export default cors(async function handler(req, res) {
  if(req.method==="OPTIONS"){
    res.end()
    return false
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/cadastre",
  })(req, res);
});