import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      console.log("ghabl", state);
      state.movies = payload;
      console.log("bad", state.movies);
    },
  },
});
export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
