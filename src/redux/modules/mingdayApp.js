import * as moment from "moment";

const INPUT_CHANGED = "INPUT_CHANGED";
const INPUT_SUBMIT = "INPUT_SUBMIT";
const LIST_ITEM_CLICK = "LIST_ITEM_CLICK";
const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";

export function listItemClick(index) {
  return {
    type: LIST_ITEM_CLICK,
    index
  };
}

export function deleteListItem(index) {
  return {
    type: DELETE_LIST_ITEM,
    index
  };
}

export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  };
}

export function inputChange(value) {
  return {
    type: INPUT_CHANGED,
    value
  };
}

const initialState = {
  notes: [
    {
      key: 0,
      text: "Hello world 2017!",
      datetime: "2017-01-01"
    },
    {
      key: 1,
      text: "It's my birthday",
      datetime: "2017-01-03"
    }
  ],
  newNote: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_SUBMIT:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: state.newNote,
            datetime: moment().format(),
            key: state.notes.length
          }
        ],
        newNote: ""
      };
    case INPUT_CHANGED:
      return {
        ...state,
        newNote: action.value
      };
    case LIST_ITEM_CLICK:
      throw new Error("Not implemented!");
    case DELETE_LIST_ITEM:
      throw new Error("Not implemented!");
    default:
      return state;
  }
}
