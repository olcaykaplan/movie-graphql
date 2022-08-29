import { createSlice } from "@reduxjs/toolkit";
import { IAnimeDetailState } from "../types";

const initialState: IAnimeDetailState = {
  animeDetail: null,
};

const AnimeDetailSlice = createSlice({
  name: "animeDetailPage",
  initialState,
  reducers: {
    setAnimeDetailPage(state, action) {
      state.animeDetail = action.payload;
    },
  },
});

export const {setAnimeDetailPage} = AnimeDetailSlice.actions;
export default AnimeDetailSlice.reducer;


