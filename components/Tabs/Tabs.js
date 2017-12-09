import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import api from "../api";
import { MessageItem, TopicContext, Meldeelement, Header } from "../index";

export default class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      active: 0
    };
    this.selectItem = this.selectItem.bind(this);
    this.addComment = this.addComment.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    let { topics } = this.state;
    this.props.topics.forEach((val, indx) => {
      let topicContext = new TopicContext(val.title, indx, null);
      topics.push(topicContext);
    });
    this.setState({
      topics: topics
    });

    this.props.comments.forEach(elem => {
      this.state.topics.filter(topic => topic.topicId == elem.topicId)[0].comments.push(elem);
    });
  }

  selectItem(eventKey, t) {
    this.setState({
      active: eventKey
    });
  }

  componentDidUpdate() {
    console.log("active: " + this.state.active);
    window.scrollBy(0, 150);
  }

  addComment(t) {
    let { comments } = this.state.topics.filter(topic => topic.topicId == this.state.active)[0];
    let newComment = {
      id: ++comments.length,
      content: t,
      author: window.location.hostname
    };
    comments.push(newComment);
    this.setState({
      comments: comments
    });
    console.log("addComment...");
    this.state.topics[0].comments.forEach((v, i) => {
      console.log("message: " + i, " content: " + v.content);
    });
  }

  componentDidUpdate() {
    this.state.topics[0].comments.forEach((v, i) => {
      console.log("message: " + i, " content: " + v.content);
    });
  }

  sort(topic) {
    let grandTopic = this.state.topics[topic.topicId];
    let { comments } = grandTopic;
    console.log("sorting...");
    grandTopic.comments.sort(function(a, b) {
      if (a.content.toLowerCase() < b.content.toLowerCase()) return -1;
      if (a.content.toLowerCase() > b.content.toLowerCase()) return 1;
      return 0;
    });

    comments.forEach((v, i) => {
      console.log("index: " + i + "value: " + v.content);
    });
    this.setState({
      comments: comments
    });
  }

  render() {
    console.log("rendern");
    return (
      <Tabs defaultActiveKey={0} onSelect={this.selectItem} animation={false} id="tab-example">
        {this.state.topics.map(topic => (
          <Tab eventKey={topic.topicId} title={topic.title} className="board-background">
            <Header topic={topic} sort={this.sort.bind(null, topic)} />
            <div>
              {topic.comments.map((v, i) => {
                console.log("render topic" + v.content + " indx: " + i);

                return (
                  <MessageItem
                    message={v.content}
                    ref={ref => {
                      this.textInput = ref;
                    }}
                    key={v.id}
                    author={v.author}
                  />
                );
              })}
            </div>
            <div>
              <Meldeelement addComment={this.addComment} />
            </div>
          </Tab>
        ))}
      </Tabs>
    );
  }
}
