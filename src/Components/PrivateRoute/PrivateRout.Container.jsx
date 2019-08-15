import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
