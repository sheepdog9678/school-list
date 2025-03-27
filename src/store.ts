import { configureStore } from "@reduxjs/toolkit";
import reducer from "./_reducers/rootReducer";

export default configureStore({
  reducer,
});
