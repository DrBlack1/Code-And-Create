import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render () {

    const menuVis = this.props.menuIsOpen ? 'show' : 'hide';
    const toggleMenu = this.props.toggleMenu;

    return (
      <div className={`navigation ${menuVis}`} onClick={toggleMenu}>
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
              <Link to="/animals">Animals</Link>
          </li>
          <li className="nav-link">
            <Link to="/travel">Travel</Link>
          </li>
          <li className="nav-link">
            <Link to="/people">People</Link>
          </li>
        </ul>
      </div>
    )
  }
}

