import React, { Component } from "react";
import { Button, Badge } from "react-bootstrap";

export default props => {
  let containerStyle, badgeVal, buttonColor, onClick;
  if ("likes" in props) {
    containerStyle = "contentStyle contentStyle--like";
    badgeVal = props.likes;
    buttonColor = "success";
    onClick = props.upLikes;
  } else {
    containerStyle = "contentStyle contentStyle--hate";
    badgeVal = props.hates;
    buttonColor = "danger";
    onClick = props.upHates;
  }
  return (
    <div className={containerStyle} onClick={onClick}>
      <Button bsStyle={buttonColor} bsSize="xs" className="buttonStyle" onClick={onClick}>
        {props.sign}
      </Button>
      <div className="badgeStyle">{badgeVal}</div>
    </div>
  );
};
