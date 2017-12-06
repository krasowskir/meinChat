import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./headerStyles.scss";

export default props => {
  return (
    <div className="headerStyle">
      <h2 className="headline-background">"{props.topic.title}"</h2>
      <div className=" headline-background menuItemStyle" onClick={props.sort}>
        <Glyphicon glyph="sort-by-attributes" className="glyphStyle" />
      </div>
    </div>
  );
};
