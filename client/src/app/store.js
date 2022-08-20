import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "../features/TrendingFeatures";
import upcomingReducer from "../features/UpcomingSeason";
import topReducer from "../features/Top";
import searchReducer from "../features/complexfeatures/Search";
import searchInputReducer from "../features/complexfeatures/SearchInput";

export const store = configureStore({
    reducer:{
        trending: trendingReducer,
        upcoming: upcomingReducer,
        top: topReducer,
        search: searchReducer,
        searchValue: searchInputReducer,
    }
})
