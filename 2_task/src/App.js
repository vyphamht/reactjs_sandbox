import React from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Hello world</p>
      <Person name="Vy" age="8" />
      <Person name="Jen" age="8" />
      <Person name="Donnie" age="8" />
      <Person name="Kara" age="8" />
      <Person name="Cami" age="8" />
    </div>
  );
};

export default App;
