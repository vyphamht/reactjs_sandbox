// import React from "react";

// const MapMethod = () => {
//   const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const listItems = myArray.map((number) => {
//     return <li>{number}</li>;
//   });
//   return <div>{listItems}</div>;
// };

// export default MapMethod;

import React, { Component } from "react";

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class MapMethod extends Component {
  state = {
    numberList: myArray,
  };

  removeHander = (listIndex) => {
    const myOldArray = this.state.numberList;

    myOldArray.splice(listIndex, 1);
    this.setState({ numberList: myOldArray });
    console.log("wow", listIndex);
  };

  render() {
    const listItems = this.state.numberList.map((number, index) => (
      <li key={index} onClick={this.removeHander.bind(this, index)}>
        {number}
      </li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default MapMethod;
