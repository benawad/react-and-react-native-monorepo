import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { apolloClient } from "@gg/controllers";
import { ApolloProvider } from "@apollo/react-hooks";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
