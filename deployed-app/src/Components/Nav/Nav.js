import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div role="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">
          <Link class="nav-link" to="/">
            Blog Post App
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/newpost">
                New Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
