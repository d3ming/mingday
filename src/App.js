import React, { Component } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { NoteList } from "./components/Note";
import { AddNote } from "./components/AddNote";

const MINGDAY_DB = {
  notes: [
    {
      text: "Hello world",
      datetime: "2017-01-01"
    },
    {
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

  render() {
    return (
      <div className="App">
        <Header />
        <NoteList notes={this.state.notes} />
        <AddNote />
      </div>
    );
  }
}

export default App;
