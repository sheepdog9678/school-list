import { createSlice } from "@reduxjs/toolkit";
import { data } from "../types/data";

const initialState: data = {
  school: "",
  location: "",
  address: "",
  Harvard: 0,
  Princeton: 0,
  MIT: 0,
  Total: 0,
  key: "public",
};

export const dataSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
