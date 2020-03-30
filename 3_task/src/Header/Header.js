import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    this.state = {
      date: date
    };
  }
  render() {
    return (
      <div className=" header ">
        <h1>Task 3</h1>
        <div className="date"> Today is: {this.state.date}</div>
      </div>
    );
  }
}

export default Header;
