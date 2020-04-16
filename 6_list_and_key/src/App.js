// import React from "react";
// import "./App.css";
// import Post from "./Post/Post";

// function App() {
//   return (
//     <div>
//       <h1>Hi Vy!</h1>
//       <Post />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Post from "./Post/Post";

const postArray = [
  {
    id: 0,
    img: "https://source.unsplash.com/featured/tree",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 1,
    img: "https://source.unsplash.com/featured/sun",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/featured/house",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 3,
    img: "https://source.unsplash.com/featured/sock",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 4,
    img: "https://source.unsplash.com/featured/window",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/water",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
  {
    id: 6,
    img: "https://source.unsplash.com/featured/forest",
    title: "Build Application",
    author: "Billie Jean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam nobis rem molestiae amet tenetur ut minus quos illo magnam.",
  },
];

class App extends Component {
  state = {
    PostContent: postArray,
  };
  removeHandler = (removeId) => {
    const oldPostList = [...this.state.PostContent];
    oldPostList.splice(removeId, 1);
    this.setState({ PostContent: oldPostList });
  };

  render() {
    const PostList = this.state.PostContent.map((post, index) => {
      return (
        <Post
          key={post.id}
          img={post.img}
          title={post.title}
          author={post.author}
          text={post.text}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });
    return <div className="feed">{PostList}</div>;
  }
}

export default App;
