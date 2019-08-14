import React, { Fragment } from "react";
import Post from "./pages/Post";
//import Post from "./components/posts/";
//import Users from "./components/users/";
//import User from "./components/users/";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NotificationSystem from "./Components/NotificationComponent";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:postId" component={Post} />
          <Route path="/users" component={() => {}} />
          <Route path="/users/self" component={() => {}} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};
export default App;
