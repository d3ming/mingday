import React, { Component } from "react";
import TextField from "material-ui/TextField";

export class AddNote extends Component {
  focusInput = () => {
    this.addNoteInput.focus();
  };

  addNote = e => {
    // TODO: Update to use submit instead
    if (e.key !== "Enter") {
      return;
    }

    this.props.onAddNote();
  };

  updateNewNoteText = e => {
    this.props.inputChange(e.target.value);
  };

  componentDidMount() {
    this.focusInput();
  }

  render() {
    console.log("AddNote props", this.props);
    return (
      <TextField
        ref={input => {
          this.addNoteInput = input;
        }}
        hintText="Start typing..."
        onChange={this.updateNewNoteText}
        onKeyPress={this.addNote}
        value={this.props.newNote}
      />
    );
  }
}
