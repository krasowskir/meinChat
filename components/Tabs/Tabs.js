import React, { Component } from "react";
import MessageItem from "../MessageItem/MessageItem";
import { Tabs, Tab } from "react-bootstrap";

export default class MeineTabs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("did update");
    this.scrollToBottom();
  }

  scrollToBottom() {
    window.scrollBy(0, 150);
    // window.scrollTo(0, window.scrollY); geht nicht!
  }

  render() {
    return (
      <Tabs defaultActiveKey={0} animation={false} id="tab-example">
        {this.props.topics.map((v, i) => {
          let thema = "Thema " + i;
          return (
            <Tab eventKey={i} title={thema} key={++i}>
              <h2 className="messageTabStyle">"{v.title}"</h2>
              <div>
                {this.props.comments.map((v, i) => (
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
              <div>{this.props.meldeElem}</div>
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}
