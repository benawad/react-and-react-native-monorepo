import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "@gg/controllers";
import React from "react";
import { Books } from "./src";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Books />
    </ApolloProvider>
  );
}
