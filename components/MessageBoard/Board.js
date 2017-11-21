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

  createComments() {
    const commentItems = this.state.comments.map(elem => <MessageItem message={elem.content} author={elem.author} />);
    return commentItems;
  }

  renderTabs(comments, meldeElem) {
    return <Tabs topics={this.state.topics} comments={comments} meldeElem={meldeElem} />;
  }

  render() {
    let comments = this.createComments();
    let meldeElem = <Meldeelement />;
    return this.renderTabs(comments, meldeElem);
  }
}
