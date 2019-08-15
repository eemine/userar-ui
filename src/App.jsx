import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotificationSystem from "./Components/NotificationComponent";
import Navigation from "./Components/Navigation";
import PrivateRoute from "./Components/PrivateRoute";
import Post from "./pages/Post";
import User from "./pages/User";
import Users from "./pages/Users";
import About from "./pages/About";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <PrivateRoute path="/" exact component={Home} /> :
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/posts/:postId" componenent={Post} />
          <PrivateRoute path="/about" componenent={About} />
          <PrivateRoute path="/users" componenent={Users} />
          <PrivateRoute path="/users/self" componenent={User} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};
export default App;
