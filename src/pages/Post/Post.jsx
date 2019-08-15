import React, { Component } from "react";

class Post extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    const { match, getPostById, user } = this.props;
    getPostById(match.params.postId, user.token);
  }

  onChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { post, addComment, match, user } = this.props;
    return (
      <div>
        <li key={post._id}>
          <div className="title">{post.title}</div>
          <img src={post.media && post.media.path} alt="" />
        </li>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Comment"
            onChange={this.onChange}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={() =>
                addComment(match.params.postId, user.token, this.state.comment)
              }
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
