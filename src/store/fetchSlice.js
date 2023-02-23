import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fetchAPI from "./fetchAPI";

const fetchedData = (state, action) => {
  state.data = action.payload;
};
export const fetchAsync = createAsyncThunk(
  "fetch/fetchAsync",
  async (url, { dispatch }) => {
    // const dispatch = useDispatch();
    const response = await fetch(url);
    console.log(url);
    const data = await response.json();
    console.log(data);
    return dispatch(fetchedData(data));
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  refetchUrl: null,
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    refetchData: (state) => {
      if (state.refetchUrl) {
        state.isLoading = true;
        state.error = null;
        state.refetchUrl = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = fetchSlice;
export const { refetchData } = actions;
export default fetchSlice.reducer;
