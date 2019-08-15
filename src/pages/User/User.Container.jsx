import { connect } from "react-redux";
import { getSelf } from "./User.Action";
import User from "./User";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getSelf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
