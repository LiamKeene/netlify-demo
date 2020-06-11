import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from "app";

function startApp() {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: process.env.API_ENDPOINT || "http://localhost:3000/graphql",
  });
  const client = new ApolloClient({
    cache,
    link,
  });
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("react-root")
  );
}

startApp();
