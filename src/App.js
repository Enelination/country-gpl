import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
