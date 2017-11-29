import React, { Component } from "react";
import MessageItem from "../MessageItem/MessageItem";
import { Tabs, Tab } from "react-bootstrap";
import api from "../api";
import TopicContext from "../TopicModel/TopicContext";
import Meldeelement from "../Meldeelement/Meldeelement";

export default class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      active: 0
    };
    this.selectItem = this.selectItem.bind(this);
    this.addComment = this.addComment.bind(this);
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
  }

  render() {
    return (
      <Tabs defaultActiveKey={0} onSelect={this.selectItem} animation={false} id="tab-example">
        {this.state.topics.map(topic => (
          <Tab eventKey={topic.topicId} title={topic.title}>
            <h2 className="messageTabStyle">"{topic.title}"</h2>
            <div>
              {topic.comments.map((v, i) => (
                <MessageItem
                  message={v.content}
                  ref={ref => {
                    this.textInput = ref;
                  }}
                  key={i}
                  author={v.author}
                />
              ))}
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
