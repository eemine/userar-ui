import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    hashedPassword: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    for (const key in this.state) {
      if (this.state[key].length < 1) {
        return false;
      }
    }
    // todo - send registration form
    this.props.loginUser(this.state);
  };

  render() {
    const { user } = this.props;

    if (user.token) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.onSubmit} className="col-6 ml-auto mr-auto">
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Password</label>
          <input
            type="password"
            name="hashedPassword"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-success float-right mt-3">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
