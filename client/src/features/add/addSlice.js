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
  async ({currentStatus, episode, currentAnime}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await addService.addAnime(currentStatus, episode, currentAnime, token);
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

export const removeFromLibrary = createAsyncThunk(
  "anime/remove",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await addService.removeAnime(id, token);
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

export const editFromLibrary = createAsyncThunk(
  "anime/edit",
  async ({ id, currentStatus, episode, currentAnime }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await addService.editAnime(id, currentStatus, episode, currentAnime, token);
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
        state.addedAnime = action.payload;
      })
      .addCase(getUserAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(removeFromLibrary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addedAnime = state.addedAnime.filter(
          (anime) => anime._id !== action.payload.id
        );
      })
      .addCase(removeFromLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(editFromLibrary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editFromLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.addedAnime = state.addedAnime.map((anime) => {

        //   state.addedAnime = state.addedAnime.map((goal) =>
        //   goal._id === action.payload.id
        //     ? {
        //         ...goal,
        //        currentStatus: action.payload.currentStatus
        //       }
        //     : goal
        // );
      
      // });
        
        // state.addedAnime = state.addedAnime.map((anime) =>
        //   anime._id === action.payload.id
        //     ? {
        //         ...anime,
        //         currentStatus: action.payload.currentStatus
        //       }
        //     :  anime

        // );

        state.addedAnime = state.addedAnime.map((anime) =>
          anime._id === action.payload._id ? (anime = action.payload) : anime
        );
      })
      .addCase(editFromLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = addSlice.actions;
export default addSlice.reducer;
