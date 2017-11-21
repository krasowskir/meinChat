import React from "react";
import { FormControl, Button } from "react-bootstrap";
import "./meldeStyles.scss";
export default () => {
  return (
    <div className="meldeelementStyle">
      <FormControl type="text" placeholder="Sag etwas..." />
      <Button bsStyle="info" bsSize="medium">
        Schick ab!
      </Button>
    </div>
  );
};
