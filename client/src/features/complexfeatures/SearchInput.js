import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: 'searchInput',
    value: ''
}

const searchInput = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        searchValue: (state, action) => {
            state.value = action.payload;
        }
    }

})


export const { searchValue } = searchInput.actions;
export default searchInput.reducer