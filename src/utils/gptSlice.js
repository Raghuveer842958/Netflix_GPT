import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    makeGptSearchViewFalse: (state) => {
      state.showGptSearch = false;
    },
  },
});

export const { toggleGptSearchView, makeGptSearchViewFalse } = gptSlice.actions;
export default gptSlice.reducer;
