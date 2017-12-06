import React, { Component } from "react";
import { Button, Badge } from "react-bootstrap";
import LikeContent from "../LikeContent/LikeContent";
import "./buttonGroupStyle.scss";

export default props => (
  <div>
    <LikeContent sign="+" likes={props.likes} key={0} upLikes={props.upLikes} />
    <LikeContent sign="-" hates={props.hates} key={1} upHates={props.upHates} />
  </div>
);
