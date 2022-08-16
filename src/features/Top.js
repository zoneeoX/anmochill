import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  baseUrl: "https://api.jikan.moe/v4",
  params: "/top/anime",
};

export const fetchTopAnime = createAsyncThunk("top/topAnime", async () => {
  return await axios.request(options.baseUrl + options.params).then((res) => {
    return res.data.data;
  });
});

const initialState = {
  name: "top",
  isLoading: false,
  isError: false,
  topList: [],
};

const topAnime = createSlice({
  name: "top",
  initialState,
  extraReducers: {
    [fetchTopAnime.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchTopAnime.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.topList = action.payload;
    },
    [fetchTopAnime.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default topAnime.reducer;
