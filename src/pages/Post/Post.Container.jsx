import { connect } from "react-redux";
import { getPostById, addComment } from "./Post.Action";
import Post from "./Post";

const mapStateToProps = state => ({
  user: state.user,
  post: state.post
});

const mapDispatchToProps = {
  getPostById,
  addComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
