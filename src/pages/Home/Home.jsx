import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    //todo - implement get list of posts
    this.props.getPostsList();
  }

  render() {
    return <div>Home</div>;
  }
}

export default Home;
