import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams(); // eslint-disable-next-line

  useEffect(() => {
    if (!loadedPost) {
      axios.get("http://localhost:3002/posts/" + postId).then((response) => {
        console.log(response.data);
        setLoadedPost(response.data);
      }, []);
    }
  });
  let postData = undefined;
  if (postId) {
    postData = <h1>Loading post</h1>;
  }
  if (loadedPost) {
    postData = (
      <div className="fullPost_">
        <h1>{loadedPost.title}</h1>
        <div className="fullPost">
          <div className="main-fullPost">
            <img src={loadedPost.img} alt={loadedPost.title} />
            <p>{loadedPost.desc}</p>
          </div>
          <Button variant="dark">
            <Link
              to="/blog"
              style={{
                "text-decoration": "none",
                color: "white",
              }}
            >
              Back
            </Link>
          </Button>{" "}
        </div>
      </div>
    );
  }
  return postData;
};

export default FullPost;
