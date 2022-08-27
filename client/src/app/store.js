import { configureStore } from "@reduxjs/toolkit";
import topReducer from "../features/Top";
import searchInputReducer from "../features/complexfeatures/SearchInput";
import favoriteReducer from "../features/complexfeatures/Add";
import MultipleAxiosReducer from "../features/MultipleAxiosFeature";

export const store = configureStore({
    reducer:{
        top: topReducer,
        searchValue: searchInputReducer,
        favorite: favoriteReducer,
        multiple: MultipleAxiosReducer,
    }
})
