import React, { Component } from "react";
import Spinner from "../../Components/Spinner";

class User extends Component {
  componentDidMount() {
    const { getSelf, user } = this.props;
    getSelf(user.token);
  }

  render() {
    const { self } = this.props.user;
    if (!self) {
      return <Spinner type="Puff" color="#00BFFF" height={100} width={100} />;
    }
    console.log(this.props.user);

    return (
      <table>
        <tbody>
          <tr>
            <td>{self.id}</td>
            <td>{self.email}</td>
            <td>{self.creataedAt}</td>
            <td>{self.userName}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default User;
