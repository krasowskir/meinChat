import React, { Component } from "react";
import { FormControl, Panel } from "react-bootstrap";
import Likes from "../Likes/Likes";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Author from "../Author/Author";
import "./itemStyle.scss";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      author: props.author,
      likes: 0,
      dislikes: 0
    };
  }

  render() {
    return (
      <Panel className="messageItemStyle">
        <Likes />
        <p className="messageContentStyle">{this.state.message}</p>
        <Author author={this.state.author} />
      </Panel>
    );
  }
}
