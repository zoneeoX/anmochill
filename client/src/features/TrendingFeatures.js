import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  baseUrl: "https://api.jikan.moe/v4",
  params: "/seasons/now",
};

export const fetchTrending = createAsyncThunk(
  "trending/fetchTrending",
  async () => {
    return await axios.request(options.baseUrl + options.params).then((res) => {
      return res.data.data;
    });
  }
);

const initialState = {
  name: "trending",
  isLoading: false,
  isError: false,
  itemList: [],
};

const TrendingFeatures = createSlice({
  name: "trending",
  initialState,
  extraReducers: {
    [fetchTrending.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.itemList = action.payload;
    },
    [fetchTrending.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },  
});

export default TrendingFeatures.reducer;
