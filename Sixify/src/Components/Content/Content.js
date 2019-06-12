import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Toolbar/Toolbar";
import Artist from "../Artist/Artist";
import Search from "../Search/Search";


class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Toolbar />
        <Artist />
        <Search />
       
        

      </div>
    );
  }
}

export default Content;
