import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/movieSlice";
import authReducer from "./Auth/authSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    aurh: authReducer,
  },
});
