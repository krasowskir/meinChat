import React, { Component } from "react";
import { FormControl, Panel } from "react-bootstrap";
import { Headline, Author } from "../index";
import "./itemStyle.scss";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      author: props.author,
      likes: props.likes,
      dislikes: props.dislikes,
      date: new Date().toLocaleTimeString()
    };
    this.upLikes = this.upLikes.bind(this);
    this.upHates = this.upHates.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.content === nextState.content &&
      nextProps.likes == nextState.likes &&
      nextProps.author === nextState.author &&
      nextProps.dislikes == nextState.dislikes
    ) {
      return false;
    } else {
      if (this.state.likes !== nextState.likes) {
        let comment = {
          author: nextState.author,
          likes: nextState.likes,
          dislikes: nextState.dislikes,
          date: nextState.date,
          content: nextState.content
        };
        this.props.updateComment(comment);
      }
      return true;
    }
  }

  upLikes() {
    let { likes } = this.state;
    ++likes;
    this.setState({
      likes
    });
  }
  upHates() {
    let { dislikes } = this.state;
    ++dislikes;
    this.setState({
      dislikes: dislikes
    });
  }

  render() {
    return (
      <Panel className="messageItemStyle">
        <Headline likes={this.state.likes} hates={this.state.dislikes} upLikes={this.upLikes} upHates={this.upHates} datum={this.state.date} />
        <p className="messageContentStyle">{this.state.content}</p>
        <Author author={this.state.author} />
      </Panel>
    );
  }
}
