import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "../features/TrendingFeatures";
import upcomingReducer from "../features/UpcomingSeason";
import topReducer from "../features/Top";
import searchInputReducer from "../features/complexfeatures/SearchInput";
import favoriteReducer from "../features/complexfeatures/Add";

export const store = configureStore({
    reducer:{
        trending: trendingReducer,
        upcoming: upcomingReducer,
        top: topReducer,
        searchValue: searchInputReducer,
        favorite: favoriteReducer,
    }
})
