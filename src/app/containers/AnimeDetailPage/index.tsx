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
  height: 100vh;
  background-color: #fafafa;
`;
const Banner = styled.div<IProps>`
  width: 100vw;
  height: 300px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  height: 100%;
  padding-left: 15%;
  padding-right: 15%;
`;
const Header = styled.div`
  margin-top: 10px;
  width: 100%;
  min-height: 300px;
`;
const AnimeCard = styled.div`
  float: left;
  width: 200px;
  height: 290px;
  text-align: center;
  background-color: #2d2d2d;
  margin-right: 20px;
  margin-bottom: 4px;
`;
const AnimeCardImage = styled.img<IProps>`
  background: url(${(props) => props.image});
  width: 200px;
  min-width: 200px;
  height: 260px;
`;
const AnimeAverage = styled.span`
  color: darkorange;
  font-size: 17px;
  line-height: 27px;
`;

const AnimeDesc = styled.div`
  text-align: justify;
  font-size: 16px;
  padding: 50px 20px;
  color: #565656;
`;
const AnimeTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const Tabs = styled.div`
  width: 100%;
  margin: 10px 0px;
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
  width: 33.3%;
  &:hover {
    background-color: #555;
  }
`;

const TabContent = styled.div`
  margin-top: 30px;
  padding: 40px 10px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;
const Genre = styled.span`
  padding: 4px;
  margin: 20px 4px;
  background-color: lightpink;
  border-radius: 3px;
  color: #fafafa;
`;

const CharacterCard = styled.div`
  float: left;
  height: 160px;
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 7px 7px 7px 7px;
  margin: 5px;
  @media (min-width: 1551px) {
    width: 30%;
  }
  @media (min-width: 1251px) and (max-width: 1550px) {
    width: 40%;
  }
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    margin: 5px 0;
  }
`;
const CharacterCardImage = styled.div<IProps>`
  float: left;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  width: 140px;
  border-radius: 7px 0 0 7px;
  @media (max-width: 400px) {
    width: 80px;
  }
`;
const CharacterCardInfo = styled.div`
  float: left;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 0 7px 10px 7px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

// .product-text {
//   height: 300px;
//   width: 327px;
// }

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
        {animePage?.trailer?.thumbnail && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              animePage?.trailer?.thumbnail.split("/")[4]
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
        <div style={{ margin: "10px" }}>
          Genres:
          {animePage?.genres?.map((genre) => (
            <Genre>{genre}</Genre>
          ))}
        </div>
        <div style={{ margin: "10px" }}>Total Number of Episodes  : {animePage?.episodes}</div>
        <div style={{ margin: "10px" }}>
          Relations :
          {animePage?.relations?.edges?.map(
            (edge) =>
              edge?.node?.title?.english && (
                <span
                  style={{
                    padding: "5px",
                    margin: "5px",
                    display: "inline-block",
                    border: "1px solid grey",
                    borderRadius: "4px",
                  }}
                >
                  {edge?.node?.title?.english}
                </span>
              )
          )}
        </div>
      </TabContent>
    );

    if (selectedTab === "characters") {
      content = (
        <TabContent>
          {animePage?.characters?.edges?.map((character) => (
            <CharacterCard>
              <CharacterCardImage image={character?.node?.image?.large || ""} />
              <CharacterCardInfo>
                <p>
                  Name:{" "}
                  {`${character?.node?.name?.first || ""} ${
                    character?.node?.name?.last || ""
                  }`}
                </p>
                <p>Age: {character?.node?.age || "Unkown"}</p>
                <p>Gender: {character?.node?.gender || "Unkown"}</p>
              </CharacterCardInfo>
            </CharacterCard>
          ))}
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
        <Tabs>
          <TabLink onClick={() => setSelectedTab("details")}>Details</TabLink>
          <TabLink onClick={() => setSelectedTab("characters")}>
            Characters
          </TabLink>
          <TabLink onClick={() => setSelectedTab("episodes")}>Episodes</TabLink>
        </Tabs>
        {showSelectedTab()}
      </Container>
    </Wrapper>
  );
};

export default AnimeDetailPage;
