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

  render() {
    return (
      <div className="meldeelementStyle">
        <FormControl type="text" onChange={this.onCommentChange} placeholder="Sag etwas..." />
        <Button bsStyle="info" onClick={this.props.addComment.bind(null, this.state.comment)}>
          Schick ab!{this.props.meineProp}
        </Button>
      </div>
    );
  }
}
