import React, { Component } from "react";
import Meldeelement from "../../Meldeelement/Meldeelement";
import MessageItem from "../../MessageItem/MessageItem";
import { Tab } from "react-bootstrap";
import Header from "../../HeaderBar/Header";
import sort from "../../../util/helpFunctions";
import shortid from "shortid";

export default class MyTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicHeadline: props.topic.title,
      topicId: props.topic.topicId,
      comments: props.comments
    };
    this.sortBy = this.sortBy.bind(this);
    this.addComment = this.addComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  addComment(t) {
    let { comments } = this.state;
    let newComment = {
      id: shortid.generate(),
      content: t,
      author: window.location.hostname,
      likes: 0,
      dislikes: 0
    };
    comments.push(newComment);
    this.setState({
      comments: comments
    });
  }

  updateComment(comment) {
    let { comments } = this.state;
    comments.forEach((c, index) => {
      if (c.content.includes(comment.content)) {
        c.likes = comment.likes;
        c.dislikes = comment.dislikes;
      }
    });
    this.setState({
      comments
    });
  }

  sortBy(type) {
    let { comments } = this.state;
    const respComments = sort({ comments, type });
    this.setState({
      comments: respComments
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.topicHeadline} sortBy={this.sortBy} />
        <div>
          {this.state.comments.map((v, i) => (
            <MessageItem
              content={v.content}
              ref={ref => {
                this.textInput = ref;
              }}
              key={v.id}
              author={v.author}
              updateComment={this.updateComment}
              likes={v.likes}
              dislikes={v.dislikes}
            />
          ))}
        </div>
        <Meldeelement addComment={this.addComment} />
      </div>
    );
  }
}
