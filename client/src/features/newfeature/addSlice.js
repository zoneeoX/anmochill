import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedAnime: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const addAnime = createAsyncThunk(
  "anime/add",
  async (animeData, thunkAPI) => {
    try {


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

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = addSlice.actions;
export default addSlice.reducer;
