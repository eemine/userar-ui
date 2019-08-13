import { connect } from "react-redux";
import Registration from "./Registration";
import { registerUser } from "./Registration.Actions";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
