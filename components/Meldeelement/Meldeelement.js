import React, { Component } from "react";
import { FormControl, Button } from "react-bootstrap";
import "./meldeStyles.scss";
export default class Meldeelement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    this.onCommentChange = this.onCommentChange.bind(this);
    this.clearContent = this.clearContent.bind(this);
  }

  onCommentChange(e) {
    const comment = e.target.value;
    this.setState({
      comment: comment
    });
  }

  getComment() {
    return this.state.comment;
  }
  submitCall(e) {
    e.key === "Enter" ? this.clearContent() : "";
  }
  clearContent() {
    this.input.value = "";
    this.props.addComment(this.state.comment);
  }

  render() {
    return (
      <div className="meldeelementStyle">
        <FormControl
          type="text"
          onChange={this.onCommentChange}
          inputRef={ref => {
            this.input = ref;
          }}
          placeholder="Sag etwas..."
          onKeyPress={this.submitCall.bind(this)}
        />
        <Button bsStyle="info" onClick={this.clearContent}>
          Schick ab!
        </Button>
      </div>
    );
  }
}
