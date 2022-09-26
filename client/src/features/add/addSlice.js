import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    addedAnime: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reduers: {
        reset: (state) => initialState
    }
})

export const { reset } = addSlice.actions
export default addSlice.reducer