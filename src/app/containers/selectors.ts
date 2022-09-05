import { createSelector } from "reselect";
import { IRootState, IAnimeState } from "../types";

const selectHomePage = (state: IRootState) => state.homePage;
const selectAnimeDetailPage = (state: IAnimeState) => state.animePage;

export const makeSelectAnimePage = createSelector(
  selectHomePage,
  (homePage) => homePage.animePage
);
export const makeGetAnimeDetail = createSelector(
  selectAnimeDetailPage,
  (anime) => anime.animeDetail
);