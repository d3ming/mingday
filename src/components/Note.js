import React from "react";
import * as _ from "lodash";

export const Note = ({ text, datetime }) => (
  <div className="Note-container">
    <span className="Note-text">{text}</span>
  </div>
);

// TODO: get data in...
export const NoteList = ({ notes }) =>
  _.map(notes, noteObj => {
    return <Note text={noteObj.text} datetime={noteObj.datetime} />;
  });
