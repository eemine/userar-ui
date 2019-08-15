import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotificationSystem from "../NotificationComponent";
import Navigation from "../Navigation";
import PrivateRoute from "../PrivateRoute";
import Post from "../../pages/Post";
import User from "../../pages/User";
import Users from "../../pages/Users";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Registration from "../../pages/Registration";
import Login from "../../pages/Login";

const App = ({ user, logout }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} logout={logout} />
        <Switch>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />

          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/users/self" component={User} />

          <PrivateRoute path="/posts/:postId" component={Post} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
