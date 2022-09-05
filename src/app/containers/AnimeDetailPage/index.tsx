import React, { useEffect, useState } from "react";
import { Dispatch } from "react";
import { useParams } from "react-router";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimeCharactersByAnimeId } from "../../services/animeService/__generated__/GetAnimeCharactersByAnimeId";
import { makeGetAnimeDetail } from "../selectors";
import { setAnimeDetail } from "./animeDetailPage.slice";
interface IActionDispatch {
  type: string;
  payload: GetAnimeCharactersByAnimeId["Media"];
}

const actionDispatch = (dispatch: Dispatch<IActionDispatch>) => ({
  setAnimeDetail: (media: GetAnimeCharactersByAnimeId["Media"]) =>
    dispatch(setAnimeDetail(media)),
});
const stateSelector = createSelector(makeGetAnimeDetail, (animePage) => ({
  animePage,
}));

type IProps = {
  image: string;
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
`;
const Banner = styled.div<IProps>`
  width: 100vw;
  height: 300px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
  background: #fafafa;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  margin-top: 10px;
`;
const AnimeCard = styled.div`
  text-align: center;
  background-color: #2d2d2d;
`;
const AnimeCardImage = styled.div<IProps>`
  background: url(${(props) => props.image});
  width: 200px;
  height: 260px;
`;
const AnimeAverage = styled.span`
  color: darkorange;
  font-size: 17px;
  line-height: 27px;
`;

const AnimeDesc = styled.div`
  font-size: 16px;
  max-width: 900px;
  padding: 50px 20px;
  color: #565656;
`;
const AnimeTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const TabLink = styled.button`
  background-color: #2d2d2d;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  margin: 10px 0px;
  width: 33.3%;
  &:hover {
    background-color: #555;
  }
`;

const TabContent = styled.div`
  margin-top: 30px;
  padding: 40px;
  background-color: yellow;
`;
const Genre = styled.span`
  padding: 4px;
  margin: 20px 4px;
  background-color: lightpink;
  border-radius: 3px;
  color: #fafafa;
`;
const AnimeDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("details");
  const { setAnimeDetail } = actionDispatch(useAppDispatch());
  const { animePage } = useAppSelector(stateSelector);
  const bannerPicture = new URL("/src/img/banner.jpeg", import.meta.url);
  let { id } = useParams();
  console.log("bannerPicture", bannerPicture);
  const fetchAnimeDetail = async (id: Number) => {
    const animeDetailData = await animeService
      .getAnimeDetailByID(id)
      .catch((err) => {
        console.log("Error: ", err);
      });
    if (animeDetailData) setAnimeDetail(animeDetailData);
    console.log("animeDetail", animeDetailData);
  };

  useEffect(() => {
    fetchAnimeDetail(Number(id));
  }, [id]);
  const showSelectedTab = () => {
    let content = (
      <TabContent>
        <h1>Description...</h1>
      </TabContent>
    );

    if (selectedTab === "characters") {
      content = (
        <TabContent>
          <h1>Characters</h1>
        </TabContent>
      );
    } else if (selectedTab === "episodes") {
      content = (
        <TabContent>
          <h1>Episodes</h1>
        </TabContent>
      );
    }

    return content;
  };
  return (
    <Wrapper>
      <Banner image={animePage?.bannerImage || bannerPicture.pathname} />
      <Container>
        <Header>
          <AnimeCard>
            <AnimeCardImage image={animePage?.coverImage?.large || ""} />
            <AnimeAverage>
              {animePage?.averageScore ? animePage?.averageScore / 10 : 0}
            </AnimeAverage>
          </AnimeCard>
          <AnimeDesc>
            <AnimeTitle>{animePage?.title?.english}</AnimeTitle>
            {animePage?.description}
          </AnimeDesc>
        </Header>
        <div>
          <TabLink onClick={() => setSelectedTab("details")}>Details</TabLink>
          <TabLink onClick={() => setSelectedTab("characters")}>
            Characters
          </TabLink>
          <TabLink onClick={() => setSelectedTab("episodes")}>Episodes</TabLink>
        </div>
        <TabContent>
          Genres:
          {animePage?.genres?.map((genre) => (
            <Genre>{genre}</Genre>
          ))}
          Episodes : {animePage?.episodes}
          {animePage?.relations?.edges?.map((edge) => 
            <div>{edge?.node?.title?.english}</div>
          )}
        </TabContent>
        {/* {showSelectedTab()} */}
      </Container>
    </Wrapper>
  );
};

export default AnimeDetailPage;
