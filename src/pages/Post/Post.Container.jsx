import { connect } from "react-redux";
import { getPostById } from "./Post.Action";
import Post from "./Post";

const mapStateToProps = state => ({
  user: state.user,
  post: state.post
});

const mapDispatchToProps = {
  getPostById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
