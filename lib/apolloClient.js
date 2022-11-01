import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri: '/api/cadastre',
})