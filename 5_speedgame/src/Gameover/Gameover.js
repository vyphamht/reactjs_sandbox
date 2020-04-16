import React from "react";
import "./Gameover.css";

const CloseHandler = () => {
  window.location.reload(); 
};

const Gameover = (props) => {
  return (
    <div className="overlay_page">
      <div className="overlay">
        <div>
          <h2>YOU SUCK AT THIS GAME!!!</h2>
          <p>Your current score is: {props.score}</p>
        </div>
        <button onClick={CloseHandler}>Close</button>
      </div>
    </div>
  );
};

export default Gameover;
