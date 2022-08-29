import { GetAnimePage } from "../services/animeService/__generated__/GetAnimePage";
import { GetAnimeCharactersByAnimeId } from "../services/animeService/__generated__/GetAnimeCharactersByAnimeId";

export interface IHomePageState {
  animePage: GetAnimePage["Page"];
}
export interface IAnimeDetailState {
  animeDetail: GetAnimeCharactersByAnimeId["Media"];
}
