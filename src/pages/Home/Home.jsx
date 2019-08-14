import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    const { getPostsList, user } = this.props;
    getPostsList(user.token);
  }

  render() {
    const { user } = this.props;

    if (!user.token) {
      return <Redirect to="/login" />;
    }

    return <div>Home</div>;
  }
}

export default Home;
