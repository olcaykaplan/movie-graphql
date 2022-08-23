import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  margin: 3%;
  display: flex;
  justify-content: space-start;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 16.5%;
  margin-bottom: 20px;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const AnimeCover = styled.div`
  width: auto;
  height: 15em;
  img {
    width: auto;
    height: 100%;
    border-radius:7px;
  }
`;

const AnimeTitle = styled.div`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
  text-align:center;
`;
const AnimeAverage = styled.span`
  margin-left: 5px;
  color:darkorange;
  font-size: 17px;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);
  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>
              {anime?.title?.english}
             <AnimeAverage>(<strong>{anime?.averageScore}</strong><span style={{color:"black"}}>/100</span>)</AnimeAverage>
            </AnimeTitle>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}
