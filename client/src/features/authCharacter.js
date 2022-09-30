import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCharacters: [],
    isLoading: false,
    isError: false,
    isSuccessful: false,
    message: '',
}


export const authCharacter = createSlice({
    name: 'character',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        
    }
})