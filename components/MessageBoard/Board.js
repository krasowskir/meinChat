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
      topics: []
    };
    this.renderTabs = this.renderTabs.bind(this);
  }

  componentDidUpdate() {
    window.scrollBy(0, 150);
    // window.scrollTo(0, window.scrollY); geht nicht!
  }

  renderTabs() {
    const topics = api.getTopics();
    const comments = api.getComments();
    return <Tabs topics={topics} comments={comments} />;
  }

  render() {
    return this.renderTabs();
  }
}
