import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="card">
      <p>
        Hello, my name is {props.name} and I'm {props.age} years old
      </p>
    </div>
  );
};

export default Person;
