import React, { Component } from "react";
import { Button, Badge } from "react-bootstrap";
import Datum from "../Datum/Datum";
import ButtonLikeGroup from "../ButtonLikeGroup/ButtonLikeGroup";
import "./likesStyle.scss";

export default props => {
  return (
    <div className="likesbuttongroupstyle">
      <Datum datum={props.datum} />
      <ButtonLikeGroup upLikes={props.upLikes} upHates={props.upHates} hates={props.hates} likes={props.likes} />
    </div>
  );
};
