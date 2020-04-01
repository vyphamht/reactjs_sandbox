import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    value: ""
  };
  changeHandler = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  changeHandler1 = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  changeHandler2 = event => {
    this.setState({
      phoneNumber: event.target.value
    });
  };
  changeHandler3 = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            First name:
            <input type="text" onChange={this.changeHandler} />
          </label>
          <label>
            Last name:
            <input type="text" onChange={this.changeHandler1} />
          </label>
          <label>
            Phone number:
            <input type="text" onChange={this.changeHandler2} />
          </label>
          <label>
            Message:
            <input type="textarea" onChange={this.changeHandler3} />
          </label>
        </form>
        <p>My input:</p>
        <div className="view">
          <p>First name: <span>{this.state.firstName}</span> </p>
          <p>Last name: <span>{this.state.lastName}</span></p>
          <p>Phone number: <span>{this.state.phoneNumber}</span></p>
          <p>Message: <span>{this.state.message}</span></p>
        </div>
      </div>
    );
  }
}

export default App;
