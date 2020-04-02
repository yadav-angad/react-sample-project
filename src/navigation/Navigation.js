import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      previousSelectedMenuItem: ''
    }
  }

  selectedMenu(id) {
    if (!!this.state.previousSelectedMenuItem) {
      document.getElementById(this.state.previousSelectedMenuItem).style.textDecoration = "none";
      this.highlightMenuItem(id);
    } else {
      this.highlightMenuItem(id);
    }
  }

  highlightMenuItem(id) {
    this.setState({previousSelectedMenuItem: id});
    document.getElementById(id).style.textDecoration = "underline";
  }

  render() {
    return (
        <div className="header4 displayFlexRow">
          <NavLink id="home" className="menuItem" to="/" onClick={() => {
            this.selectedMenu("home");
          }} activeClassName="active">Home</NavLink>
          <NavLink id="user" className="menuItem" to="/user" onClick={() => {
            this.selectedMenu("user");
          }} activeClassName="active">User</NavLink>
        </div>
    );
  }
};

export default Navigation;