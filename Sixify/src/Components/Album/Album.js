import React, { Component } from 'react';
import './Album.css';
import Table from "../Table/Table";


class Album extends Component {
    state = {};
    render() { 
        return ( 
        <div className="album-info">
            <h1> Album Name: </h1>
            <p> Artist</p>
            <p> Year Songs Durations</p>
            <Table title="Oli" duration="5 seconds" like="yes"/>
        </div>);
    }
}

export default Album;
 