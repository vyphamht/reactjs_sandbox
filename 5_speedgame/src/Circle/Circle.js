import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className={"circle" + (props.active ? " active " : " ")}
      onClick={props.circleClicked}
      style={{
        backgroundColor: props.active ? props.active : props.buttonColor,
      }}
    ></div>
  );
};

export default Circle;
