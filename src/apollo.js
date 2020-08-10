import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_ENDPOINT = `https://eager-fox-36.hasura.app/v1/graphql`;

const createApolloClient = () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}
export default createApolloClient;
