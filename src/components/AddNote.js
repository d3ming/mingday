import React, { Component } from "react";
import TextField from "material-ui/TextField";

export class AddNote extends Component {
  constructor({ onAddNote }) {
    super();
    this.state = {
      textToAdd: ""
    };
  }

  updateNewNoteText = (e, value) => {
    this.setState({
      textToAdd: value
    });
  };

  addNote = e => {
    if (e.key !== "Enter" || !this.state.textToAdd) {
      return;
    }
    this.props.onAddNote(this.state.textToAdd);
    this.setState({
      adding: false,
      textToAdd: ""
    });
  };

  focusInput = () => {
    this.addNoteInput.focus();
  };

  componentDidMount() {
    this.focusInput();
  }

  render() {
    return (
      <TextField
        ref={input => {
          this.addNoteInput = input;
        }}
        hintText="Start typing..."
        onChange={this.updateNewNoteText}
        onKeyPress={this.addNote}
        value={this.state.textToAdd}
      />
    );
  }
}
