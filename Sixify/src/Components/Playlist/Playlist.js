import React, { Component } from "react";
import Table from "../Table/Table";

class Playlist extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Table artistHeader="Artist" albumHeader="Album" releasedHeader="Released" title="Oli" artist="Holyrod" album="Nice" released="Today" duration="5 seconds" /> 
      </div>
    );
  }
}

export default Playlist;
