import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache(),
});
