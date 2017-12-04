import React, { Component } from "react";
import "./datumStyles.scss";

export default props => (
  <div className="datumContainerStyle">
    <div className="datumMain">{props.datum}</div>
    <div className="datumCorner" />
  </div>
);
