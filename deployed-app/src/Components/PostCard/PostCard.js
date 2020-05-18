import React from "react";

import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ title, img, desc, link, remove }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={img} alt={title} />

      <button variant="dark">
        <Link to={link}>Read more</Link>
      </button>

      <button variant="dark" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default PostCard;
