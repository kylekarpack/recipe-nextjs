import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<any>;

function createApolloClient(): ApolloClient<any> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: "/api/graphql"
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Widget: {
          keyFields: ["id"]
        }
      }
    })
  });
}

/**
 * Initialize the Apollo client
 */
export function initializeApollo(initialState: any = null): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }
  return _apolloClient;
}

/**
 * Use a memoized Apollo state
 */
export function useApollo(initialState: any): ApolloClient<any> {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
