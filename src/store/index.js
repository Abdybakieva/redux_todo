import { createStore } from "redux";
import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer/TodosReducer";

export const rootReducer = combineReducers({
  todo: todosReducer,
});
export const store = createStore(rootReducer);

