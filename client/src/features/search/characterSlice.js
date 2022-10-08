import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import characterService from "./characterService";

const initialState = {
  currentCharacters: [],
  isLoading: false,
  isError: false,
  isSuccessful: false,
  message: "",
};

export const getCharacter = createAsyncThunk(
  "anime/character",
  async (mal_id, thunkAPI) => {
    try {
      return await characterService.get(mal_id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCharacters = action.payload;
        state.message = "Success";
      })
      .addCase(getCharacter.rejected, (state, action) => {
        state.isError = true;
        state.message = "Error";
      });
  },
});

export default characterSlice.reducer;
