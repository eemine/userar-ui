import React from "react";

const Jumbotron = ({ header, description, text, buttonText }) => (
  <div className="jumbotron">
    <h1 className="display-4">{header}</h1>
    <p className="lead">
      {description}
    </p>
    <hr className="my-4" />
    <p>
      {text}
    </p>
    <a className="btn btn-primary btn-lg" href="#" role="button">
      {buttonText}
    </a>
  </div>
);

export default Jumbotron;
