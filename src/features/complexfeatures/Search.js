import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux'
import axios from "axios";
//useelector from another slucue

const options = {
  baseUrl: "https://api.jikan.moe/v4/anime",
  params: "?q=Naruto",
};


export const fetchSearch = createAsyncThunk("search/fetchSearch", async () => {
  return await axios.request(options.baseUrl + options.params).then((res) => {
    return res.data.data;
  });
});

const initialState = {
    name: 'search',
    isLoading: false,
    isError: false,
    searchList: []
}


const SearchFeatures = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [fetchSearch.pending] : (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [fetchSearch.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.searchList = action.payload;
        },
        [fetchSearch.rejected] : (state, action) => {
            state.isLoading = false;
            state.isError = true;
        }
    }

})


export default SearchFeatures.reducer