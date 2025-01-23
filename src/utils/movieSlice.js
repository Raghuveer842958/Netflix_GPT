import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    populerMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVedio: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    addPopulerMovies: (state, action) => {
      state.populerMovies = action.payload;
    },
    removePopulerMovies: (state) => {
      state.populerMovies = null;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRatedMovies: (state) => {
      state.topRatedMovies = null;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    removeUpcomingMovies: (state) => {
      state.upcomingMovies = null;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    removeTrailerVedio: (state) => {
      state.trailerVedio = null;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  removeNowPlayingMovies,
  addPopulerMovies,
  removePopulerMovies,
  addTopRatedMovies,
  removeTopRatedMovies,
  addUpcomingMovies,
  removeUpcomingMovies,
  addTrailerVedio,
  removeTrailerVedio,
} = movieSlice.actions;
