import { createStore, combineReducers } from "redux";
import mingdayApp from "./modules/mingdayApp";

const reducer = combineReducers({
  mingdayApp
});

export const configureStore = initialState =>
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
