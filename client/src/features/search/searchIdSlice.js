import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchIdService from "./searchIdService";

const initialState = {
  currentAnime: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const getId = createAsyncThunk("search/id", async (id, thunkAPI) => {
  try {
    return await searchIdService.get(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const searchIdSlice = createSlice({
  name: "searchId",
  initialState,
  reducers: {
    reset: (state) => state.initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentAnime = action.payload;
      })
      .addCase(getId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Error";
      });
  },
});



export const { reset } = searchIdSlice.actions;
export default searchIdSlice.reducer;
