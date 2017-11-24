import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

export class AddNote extends Component {
  constructor({onAddNote}) {
    super();
    this.state = {
      adding: false,
      textToAdd: ""
    };
  }

  addNote = e => {
    this.setState({
      adding: false
    });

    if (!this.state.textToAdd) {
      console.error('No note text!');
      return;
    }

    this.props.onAddNote(this.state.textToAdd);
  };

  updateNewNoteText = (e, value) => {
    this.setState({
      textToAdd: value
    });
  }

  render() {
    const renderAddNoteButton = () => (
      <FlatButton
        primary={true}
        label="New Note"
        onClick={() => this.setState({adding: true})}
      />
    );

    const renderAddingNote = () => (
      <TextField
        hintText="Start typing..."
        onClick={this.addNote}
        onChange={this.updateNewNoteText}
      />
    );

    const result = this.state.adding
      ? renderAddingNote()
      : renderAddNoteButton();
    return result;
  }
}
