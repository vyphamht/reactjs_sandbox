import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blog.css";

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import FullPost from "../FullPost/FullPost";

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3002/posts").then((response) => {
      const posts = response.data;
      setPost(posts);
      console.log(posts);
    });
  }, []); // [] to make the state updated once
  const removeHandler = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3002/posts/" + id)
      .then(() => {
        return axios.get("http://localhost:3002/posts/");
      })
      .then((response) => {
        setPost(response.data);
      });
  };
  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
        remove={() => removeHandler(p.id)}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div className="blogList">
            <h1>Blog</h1>
            <div className="postList">{PostList}</div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
