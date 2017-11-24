import React from "react";
import * as _ from "lodash";

export const Note = ({ text, datetime }) => (
  <div className="Note-container">
    <span className="Note-text">{text}</span>
  </div>
);

// TODO: get data in...
export const NoteList = ({ notes }) =>
  _.map(notes, noteObj =>
    (
      <Note
        text={noteObj.text}
        key={noteObj.key}
        datetime={noteObj.datetime}
      />
    )
  );
