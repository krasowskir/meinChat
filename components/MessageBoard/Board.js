import React, { Component } from "react";
import "./messageStyles.scss";
import api from "../api";
import { Tabs, Meldeelement } from "../index";

export default class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
    this.renderTabs = this.renderTabs.bind(this);
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
