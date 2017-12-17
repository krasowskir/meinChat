import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import sort from "../../util/helpFunctions";
import "./headerStyles.scss";

export default props => {
  const { title } = props;
  return (
    <div className="headerStyle">
      <h2 className="headline-background">"{title}"</h2>
      <div className=" headline-background menuItemStyle" onClick={props.sortBy.bind(null, "alphabet")}>
        <Glyphicon glyph="sort-by-attributes" className="glyphStyle" />
      </div>
      <div className=" headline-background menuItemStyle" onClick={props.sortBy.bind(null, "likes")}>
        <Glyphicon glyph="thumbs-up" className="glyphStyle" />
      </div>
    </div>
  );
};
