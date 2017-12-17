import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import api from "../api";
import { MessageItem, TopicContext, Meldeelement, Header } from "../index";
import MyTab from "./Tab/Tab";

export default class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      active: 0,
      sortAttr: ""
    };
    this.selectItem = this.selectItem.bind(this);
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
    window.scrollBy(0, 150);
  }

  render() {
    console.log("rendern");
    return (
      <Tabs defaultActiveKey={0} onSelect={this.selectItem} animation={false} id="tab-example">
        {this.state.topics.map((topic, indx) => {
          console.log("topic comments: " + topic.comments);
          return (
            <Tab eventKey={topic.topicId} title={topic.title} className="board-background">
              <MyTab topic={topic} comments={topic.comments} key={indx} />
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}
