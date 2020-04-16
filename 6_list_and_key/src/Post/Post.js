import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div>
      <div onClick={props.click} className="card">
        <img src={props.img} alt={props.title}></img>
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
