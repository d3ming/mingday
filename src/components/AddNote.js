import React, { Component } from 'react';

export class AddNote extends Component {
  constructor(props) {
    super();
    this.state = {
      adding: false,
      textToAdd: ''
    }
  }

  onClickToAdd() {
    this.setState({
      adding: true
    });
  }

  onAddNote(text) {
    this.setState({
      adding: false
    });

    this.props.onAddNote();
  }

  render() {
    function renderAddNoteButton() {
      return (
        <div>
          <span>Add Note</span>
        </div>
      );
    }

    function renderAddingNote() {
      return (
        <div class='AddNote-container' onClick={this.onClickToAdd}>
          <input placeholder="Start typing here..." />
          <button onClick={() => this.onAddNote(this.state.textToAdd)} />
        </div>
      )
    }

    const result = this.state.adding ? renderAddingNote() : renderAddNoteButton();
    return result;
  }
}