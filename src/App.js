import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import History from "./notre-histoire";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <BrowserRouter>
          <div>
            <NavLink className="link" activeClassName="selected" exact to="/">
              Accueil
            </NavLink>
            <NavLink
              className="link"
              activeClassName="selected"
              exact
              to="/notre-histoire.js"
            >
              Mon Histoire
            </NavLink>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire.js" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
