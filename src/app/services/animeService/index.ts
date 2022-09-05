import { apolloClient } from "../../graphql";
import { GET_ANIME_PAGE, GET_ANIME_DETAIL } from "./queries";
import { GetAnimePage } from "./__generated__/GetAnimePage";
import { GetAnimeCharactersByAnimeId } from "./__generated__/GetAnimeCharactersByAnimeId";

class AnimeService {

  async getAnimeDetailByID( id: Number ): Promise<GetAnimeCharactersByAnimeId["Media"]> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_DETAIL,
        variables: {id},
      });
      
      if(!response || !response.data)
      throw new Error("Cannot get anime detail!");

      return response.data.Media;

    } catch (error) {
      throw error
    }
  }
  
  async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePage["Page"]> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });
      if (!response || !response.data)
        throw new Error("Cannot get anime list!");

      return response.data.Page;
    } catch (error) {
      throw error;
    }
  }

 
}

export default new AnimeService();
