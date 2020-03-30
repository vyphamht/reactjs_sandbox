import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    likes: 0
  };
  addHandler = () => {
    console.log("test");
    this.setState({ likes: this.state.likes + 1 });
  };
  removeHandler = () => {
    this.setState({ likes: this.state.likes - 1 });
  };
  resetHandler = () => {
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <h1
            className={
              this.state.likes === 0
                ? "like"
                : this.state.likes % 2 === 0
                ? "like even"
                : "like odd"
            }
          >
            Total Likes: {this.state.likes}{" "}
          </h1>
          <button onClick={this.addHandler}>Add Like</button>
          <button onClick={this.removeHandler}>Remove Like</button>
          <button onClick={this.resetHandler}>Reset Like</button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
