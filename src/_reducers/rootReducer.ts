import { combineReducers } from "@reduxjs/toolkit";
import data from "./data";

const reducer = combineReducers({
  data,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
