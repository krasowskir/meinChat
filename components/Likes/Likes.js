import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./likesStyle.scss";

export default () => {
  return (
    <div className="likesbuttongroupstyle">
      <Button bsStyle="danger" bsSize="xs">
        -
      </Button>
      <Button bsStyle="success" bsSize="xs">
        +
      </Button>
    </div>
  );
};
