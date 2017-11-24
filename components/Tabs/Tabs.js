import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import { Tabs, Tab } from "react-bootstrap";

export default props => (
  <Tabs defaultActiveKey={0} animation={false} id="tab-example">
    {props.topics.map((v, i) => {
      let thema = "Thema " + i;
      return (
        <Tab eventKey={i} title={thema} key={++i}>
          <h2 className="messageTabStyle">"{v.title}"</h2>
          {props.comments.map((v, i) => <MessageItem message={v.content} key={++i} author={v.author} />)}
          <div>{props.meldeElem}</div>
        </Tab>
      );
    })}
  </Tabs>
);
