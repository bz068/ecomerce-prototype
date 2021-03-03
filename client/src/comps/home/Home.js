import React, { Component } from "react";
import SlideShow from "./SlideShow";
import Body from "./Body";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="head">
          <SlideShow />
          <Body />
        </div>
      </div>
    );
  }
}

export default Home;
