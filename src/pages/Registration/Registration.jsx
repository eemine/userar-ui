import React, { Component } from "react";

class Registration extends Component {
  state = {
    username: "",
    email: "",
    rehashedPassword: ""
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
    this.props.registerUser(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
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
            name="rehashedPassword"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Register
        </button>
      </form>
    );
  }
}

export default Registration;
