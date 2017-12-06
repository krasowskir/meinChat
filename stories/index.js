import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Headline from "../components/MessageItem/Head/Headline";
import MessageItem from "../components/MessageItem/MessageItem";
import Meldeelement from "../components/Meldeelement/Meldeelement";
import MessageBoard from "../components/MessageBoard/Board";

import "./meineStory";

storiesOf("Button", module)
  .add("with text", () => <button onClick={action("clicked")}>Hello Button</button>)
  .add("Likes", () => <Likes />)
  .add("MessageItem", () => <MessageItem />)
  .add("Meldeelement", () => <Meldeelement />)
  .add("MessageBoard", () => <MessageBoard />);
