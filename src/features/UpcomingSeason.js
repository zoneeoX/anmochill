import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const options = {
    baseUrl: 'https://api.jikan.moe/v4',
    params: '/seasons/upcoming'
}
export const fetchUpcomingSeason = createAsyncThunk(
    "upcoming/fetchUpcomingSeason",
    async () => {
        return await axios.request(options.baseUrl + options.params).then((res) => {
            return res.data.data;
        })
    }
)


const initialState = {
    name: "trending",
    isLoading: false,
    isError: false,
    upcomingList: [],
};


const UpcomingSeason = createSlice({
    name: "trending",
    initialState,
    extraReducers: {
      [fetchUpcomingSeason.pending]: (state, action) => {
        state.isLoading = true;
        state.isError = false;
      },
      [fetchUpcomingSeason.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.upcomingList = action.payload;
      },
      [fetchUpcomingSeason.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
      },
    },
  });
  
  export default UpcomingSeason.reducer;
  