import React, { Component } from "react";

class Post extends Component {
  componentDidMount() {
    const { match, getPostById, user } = this.props;
    getPostById(match.params.postId, user.token);
  }

  render() {
    console.log(this.props.post);
    return <div>Post</div>;
  }
}

export default Post;
