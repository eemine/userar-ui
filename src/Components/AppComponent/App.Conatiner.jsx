import { connect } from "react-redux";
import logout from "./App.Action";
import App from "./App";

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
