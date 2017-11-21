import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export default props => (
  <Tabs defaultActiveKey={0} animation={false} id="tab-example">
    {props.topics.map((v, i) => {
      let thema = "Thema " + i;
      return (
        <Tab eventKey={i} title={thema}>
          <h2 className="messageTabStyle">"{v.title}"</h2>
          <div>{props.comments}</div>
          <div>{props.meldeElem}</div>
        </Tab>
      );
    })}
  </Tabs>
);
