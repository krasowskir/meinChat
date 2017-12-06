import React, { Component } from "react";
import "./authorStyles.scss";

export default props => (
  <div className="authorContainerStyle">
    <div className="authorCorner" />
    <div className="authorMain">{props.author}</div>
  </div>
);
