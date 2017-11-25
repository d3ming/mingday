import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Components
import { Header } from "../components/Header";
import { NoteList } from "../components/Note";
import { AddNote } from "../components/AddNote";

import {
  inputChange,
  inputSubmit,
  deleteListItem,
  listItemClick
} from "../redux/modules/mingdayApp";

class MingdayApp extends Component {
  propTypes = {
    mingdayApp: PropTypes.any,
    inputSubmit: PropTypes.func,
    inputChange: PropTypes.func
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <NoteList notes={this.props.mingdayApp.notes} />
          <AddNote
            onAddNote={this.props.inputSubmit}
            newNote={this.props.mingdayApp.newNote}
            inputChange={this.props.inputChange}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    mingdayApp: state.mingdayApp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: value => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit()),
    deleteListItem: i => dispatch(deleteListItem(i)),
    listItemClick: i => dispatch(listItemClick(i))
  };
}

export const MingdayAppContainer = connect(mapStateToProps, mapDispatchToProps)(
  MingdayApp
);
