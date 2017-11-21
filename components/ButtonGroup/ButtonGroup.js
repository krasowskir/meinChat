import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./buttonGroupStyle.scss";

export default () => (
  <div className="style">
    <Button bsStyle="default">Brich ab!</Button>
    <Button bsStyle="success">Melden!</Button>
  </div>
);
