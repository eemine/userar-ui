import { connect } from "react-redux";
import { getPostsList } from "./Home.Actions";
import Home from "./Home";

const mapStateToProps = state => ({
  user: state.user,
  mediaList: state.mediaList
});

const mapDispatchToProps = {
  getPostsList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
