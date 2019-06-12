import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Player from "./Components/Player/Player";
import logo from "./Components/Navbar/logo.svg";

import "./App.css";

class App extends Component {
  state = { isLoggedIn: false };

  loginWithSpotify = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div className="grid-container">
            <Navbar /> <Content /> <Player />{" "}
          </div>
        ) : (
          <div className="login">
            <img src={logo} alt="sixify" />
            <button className="login btn" onClick={this.loginWithSpotify}>
              Login With Sixify
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
