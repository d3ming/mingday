import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as moment from 'moment';

import "./App.css";
import { Header } from "./components/Header";
import { NoteList } from "./components/Note";
import { AddNote } from "./components/AddNote";

const MINGDAY_DB = {
  notes: [
    {
      key: 0,
      text: "Hello world",
      datetime: "2017-01-01"
    },
    {
      key: 1,
      text: "It's my birthday",
      datetime: "2017-01-03"
    }
  ]
};

class App extends Component {
  componentWillMount() {
    const initialData = MINGDAY_DB;
    this.setState({
      notes: initialData.notes
    });
  }

  onAddNote = (text) => {
    console.log("onaddnote",this);
    const newNote = {
      text,
      datetime: moment().format(),
      key: this.state.notes.length
    }

    const notes = this.state.notes.concat(newNote);
    this.setState({
      notes
    });
  }

  render() {
    console.log("render", this);
    return (
      <div className="App">
        <Header />
        <NoteList notes={this.state.notes} />
        <AddNote onAddNote={ this.onAddNote} />
      </div>
    );
  }
}

const StyledApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

export default StyledApp;
