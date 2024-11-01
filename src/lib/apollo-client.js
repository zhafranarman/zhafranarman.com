import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache(),
});

// Function to clear the Apollo cache
export const clearCache = async () => {
  await client.cache.reset();
  console.log("Apollo cache cleared");
};
