import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../types/data";
import axios from "axios";

interface DataState {
  data: data[]; // 배열 형태의 데이터
  loading: "idle" | "pending" | "succeeded"; // 비동기 작업 상태
}

const initialState: DataState = {
  data: [],
  loading: "idle",
};

const asynsGetFetch = createAsyncThunk("itemSlice/asynsGetFetch", async () => {
  const resp = await axios.get("http://localhost:3001/data");
  return resp.data;
});

export const dataSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asynsGetFetch.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(asynsGetFetch.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
  },
});

export { asynsGetFetch };
export default dataSlice.reducer;
