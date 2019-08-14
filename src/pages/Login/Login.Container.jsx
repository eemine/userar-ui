import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "./Login.Action";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
