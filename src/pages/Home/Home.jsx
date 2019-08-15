import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    const { getPostsList, user } = this.props;
    getPostsList(user.token);
  }

  render() {
    const { user, mediaList } = this.props;

    if (!user.token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        {mediaList.map(item => (
          <Link to={`/posts/${item._id}`} key={item._id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item.media.path}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
