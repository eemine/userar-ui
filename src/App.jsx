import React, { Fragment } from "react";
//import Posts from "./components/posts/";
//import Post from "./components/posts/";
//import Users from "./components/users/";
//import User from "./components/users/";
//import About from "./components/about/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import NotificationSystem from "./Components/NotificationComponent";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/posts/" component={() => {}} />
          <Route path="/posts/:postId" component={() => {}} />
          <Route path="/users/" component={() => {}} />
          <Route path="/users/self" component={() => {}} />
          <Route path="/about/" component={() => {}} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};
export default App;
