import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiRequest = {
  baseUrl: "https://api.jikan.moe/v4",
  currentSeason: "/seasons/now",
  upcomingSeason: "/seasons/upcoming",
};

const { baseUrl, currentSeason, upcomingSeason } = apiRequest;
const fetchCurrent = baseUrl + currentSeason;
const fetchUpcoming = baseUrl + upcomingSeason;

export const multipleFetch = createAsyncThunk(
  "multi/multipleFetch",
  async () => {
    try {
      return await axios
        .all([
          await axios.request(fetchCurrent),
          await axios.request(fetchUpcoming),

        ])
        .then(
          axios.spread((currentData, upcomingData, topData) => {
            let splittedData = [{
              Trending: currentData.data.data,
              Upcoming: upcomingData.data.data,
            }];

            return splittedData;
          })
        );
    } catch (err) {
      console.log({ message: "Something Went WRONG", err });
    }
  }
);

const initialState = {
  name: "anime",
  animeList: [],
  isLoading: false,
  isError: false,
};

const MultipleAxiosFeature = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(multipleFetch.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(multipleFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.animeList = action.payload;
        state.isError = false;
      })
      .addCase(multipleFetch, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default MultipleAxiosFeature.reducer;
