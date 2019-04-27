import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { API_ROOT, GRAPHQL } from '../constants/common';

console.log('API-ROOT ', API_ROOT);
console.log('GRAPHQL ', GRAPHQL);

const uri = `${API_ROOT}${GRAPHQL}`;

// eslint-disable-next-line import/prefer-default-export
export const GqlClient = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});
