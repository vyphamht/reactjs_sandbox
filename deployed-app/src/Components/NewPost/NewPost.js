import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    alert("Are you sure to post into the common feed?");
    e.preventDefault();
    axios.post("http://localhost:3002/posts", newPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="wholePost">
      <h1>Post to blog page</h1>
      <form className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input
            class="form-control"
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            class="form-control"
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input
            class="form-control"
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
        </div>
        <div className="buttonPost">
          <div>
            <Button variant="dark" type="submit" onClick={addPostHandler}>
              Add
            </Button>{" "}
          </div>
          <div>
            <Button variant="dark" type="reset" defaultValue="Reset">
              Reset
            </Button>{" "}
          </div>
          <div>
            <Button variant="dark">
              <Link
                to="./Blog"
                style={{
                  "text-decoration": "none",
                  color: "white",
                }}
              >
                See your post
              </Link>
            </Button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
