import React, { Component } from "react";
import Header from "./navigation/header/Header";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./about/AboutUs";
import HomePage from "./home/HomePage";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
