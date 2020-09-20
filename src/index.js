import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Header from "./Components/Header";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Header />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
