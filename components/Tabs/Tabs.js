import React, { Component } from "react";
import MessageItem from "../MessageItem/MessageItem";
import { Tabs, Tab } from "react-bootstrap";

export default props => {
  return (
    <Tabs defaultActiveKey={0} animation={false} id="tab-example">
      {props.topics.map((v, i) => {
        let thema = "Thema " + i;
        return (
          <Tab eventKey={i} title={thema} key={++i}>
            <h2 className="messageTabStyle">"{v.title}"</h2>
            <div>
              {props.comments.map((v, i) => (
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
            <div>{props.meldeElem}</div>
          </Tab>
        );
      })}
    </Tabs>
  );
};
