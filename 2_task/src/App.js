import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Vy",
        age: 8
      },
      {
        name: "Jen",
        age: 8
      },
      {
        name: "Donnie",
        age: 8
      },
      {
        name: "Kara",
        age: 8
      },
      {
        name: "Cami",
        age: 8
      }
    ],
    title: []
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hello world</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
        />
      </div>
    );
  }
}

export default App;
