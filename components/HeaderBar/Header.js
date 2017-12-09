import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./headerStyles.scss";

export default props => {
  const { topic, sort } = props;
  return (
    <div className="headerStyle">
      <h2 className="headline-background">"{topic.title}"</h2>
      <div className=" headline-background menuItemStyle" onClick={sort}>
        <Glyphicon glyph="sort-by-attributes" className="glyphStyle" />
      </div>
    </div>
  );
};
