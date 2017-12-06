import React, { Component } from "react";
import { FormControl, Panel } from "react-bootstrap";
import Headline from "./Head/Headline";
import Author from "./Author/Author";
import "./itemStyle.scss";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      author: props.author,
      likes: 0,
      dislikes: 0,
      date: new Date().toLocaleTimeString()
    };
    this.upLikes = this.upLikes.bind(this);
    this.upHates = this.upHates.bind(this);
  }

  upLikes() {
    let { likes } = this.state;
    likes++;
    this.setState({
      likes: likes
    });
  }
  upHates() {
    let { dislikes } = this.state;
    dislikes++;
    this.setState({
      dislikes: dislikes
    });
  }

  render() {
    return (
      <Panel className="messageItemStyle">
        <Headline likes={this.state.likes} hates={this.state.dislikes} upLikes={this.upLikes} upHates={this.upHates} datum={this.state.date} />
        <p className="messageContentStyle">{this.state.message}</p>
        <Author author={this.state.author} />
      </Panel>
    );
  }
}
