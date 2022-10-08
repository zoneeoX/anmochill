import { configureStore } from "@reduxjs/toolkit";
import topReducer from "../features/Top";
import favoriteReducer from "../features/complexfeatures/Add";
import MultipleAxiosReducer from "../features/MultipleAxiosFeature";
import authReducer from "../features/authSlice";
import addReducer from "../features/add/addSlice";
import searchIdReducer from "../features/search/searchIdSlice";
import characterReducer from "../features/search/characterSlice";

export const store = configureStore({
  reducer: {
    top: topReducer,
    multiple: MultipleAxiosReducer,
    auth: authReducer,
    add: addReducer,
    searchId: searchIdReducer,
    character: characterReducer,
  },
});
