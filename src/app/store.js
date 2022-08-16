import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "../features/TrendingFeatures";
import upcomingReducer from "../features/UpcomingSeason";
import topReducer from "../features/Top";

export const store = configureStore({
    reducer:{
        trending: trendingReducer,
        upcoming: upcomingReducer,
        top: topReducer,
    }
})
