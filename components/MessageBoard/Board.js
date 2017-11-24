import React, { Component } from "react";
import "./messageStyles.scss";
import MessageItem from "../MessageItem/MessageItem";
import api from "../api";
import Tabs from "../Tabs/Tabs";
import Meldeelement from "../Meldeelement/Meldeelement";

export default class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      comments: []
    };
    this.renderTabs = this.renderTabs.bind(this);
    this.createComments = this.createComments.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    const elems = api.getTopics();
    elems.forEach(e => {
      console.log("headline: " + e.title);
    });
    console.log("topics: " + api.getTopics());

    this.setState({
      topics: api.getTopics(),
      comments: api.getComments()
    });
  }

  componentDidUpdate() {
    window.scrollBy(0, 150);
    // window.scrollTo(0, window.scrollY); geht nicht!
  }

  createComments() {
    const commentItems = this.state.comments.map(elem => <MessageItem message={elem.content} author={elem.author} />);
    return commentItems;
  }

  renderTabs(comments, meldeElem) {
    console.log("render tabs: " + comments);
    return <Tabs topics={this.state.topics} comments={comments} meldeElem={meldeElem} />;
  }

  addComment(t) {
    console.log("add comment: " + t);
    let { comments } = this.state;
    let newComment = {
      id: ++comments.length,
      content: t,
      author: "richi"
    };
    comments.push(newComment);
    this.setState({
      comments
    });
  }

  render() {
    let { comments } = this.state;
    let meldeElem = <Meldeelement addComment={this.addComment} />;
    return this.renderTabs(comments, meldeElem);
  }
}
