import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("meineStory", module).add("mit div", () => {
  const output = <div>Hello World2!</div>;
  return output;
});
