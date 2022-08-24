import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "favorite",
  favoriteList: [],
  isLoading: false,
  isError: false,
};

// const response = await fetch("http://localhost:3001/api/favorite", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       animeList: selectedAnime,
//     }),
//   });

export const fetchFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (favorite, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/favorite",
        favorite,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            animeList: favorite,
          },
        }
      )
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// method: "POST",
// headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify({
//   animelist: favorite,
// }),
//   });

const favoriteFeature = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFavorite.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchFavorite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.favoriteList.push(action.payload);
    },
    [fetchFavorite.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default favoriteFeature.reducer;
