import React from "react";

const Alert = ({ message, type = "primary" }) => (
  <div className={`alert alert-${type}`} role="alert">
    {message}
  </div>
);

export default Alert;
