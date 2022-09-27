import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addService from "./addService";

const initialState = {
  addedAnime: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addAnime = createAsyncThunk(
  "anime/add",
  async (animeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await addService.addAnime(animeData, token);
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

export const getUserAnime = createAsyncThunk(
  "anime/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await addService.getUserAnime(token);
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
  extraReducers: (builder) => {
    builder
      .addCase(addAnime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addedAnime.push(action.payload);
      })
      .addCase(addAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getUserAnime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addedAnime = action.payload
      })
      .addCase(getUserAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = addSlice.actions;
export default addSlice.reducer;
