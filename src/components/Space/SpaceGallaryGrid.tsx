import React from "react";
import styled from "styled-components";
import stars from "./../../media/stars.svg";
import spaceface from "./../../media/spaceface.jpg";
import funkyriver from "./../../media/funkyriver.jpg";
import octo from "./../../media/octo.jpg";
import retrowave from "./../../media/retrowave.jpg";
import orangesky from "./../../media/orangesky.jpg";
import mushrooms from "./../../media/mushrooms.jpg";
import TakeOffRocket from "./TakeOffRocket";

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackGround = styled.div`
  background: url(${stars}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  x-index: -1;
  display: flex;
  justify-content: center;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  height: 70em;
  width: 100em;
  margin: 70px;
  @media (max-width: 1800px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    height: 200em;
  }
  @media (max-width: 1200px) {
    height: 150em;
  }
  @media (max-width: 1100px) {
    height: 120em;
  }
  @media (max-width: 1000px) {
    height: 110em;
  }

`;

const Grid1 = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  justift-content: center;
  align-self: center;
  margin: 10px;
  border: 4px solid #ff00d9;
  background: url(${octo});
  height: 95%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const Grid2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  justift-content: center;
  align-self: center;
  margin: 20px;
  border: 4px solid #ff00d9;
  background: url(${spaceface});
  height: 90%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const Grid3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  justift-content: center;
  align-self: center;
  margin: 20px;
  border: 4px solid #ff00d9;
  background: url(${funkyriver});
  height: 90%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;
const Grid4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  justift-content: center;
  align-self: center;
  margin: 2 0px;
  border: 4px solid #ff00d9;
  background: url(${mushrooms});
  height: 90%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  @media (max-width: 1800px) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

const Grid5 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  justift-content: center;
  align-self: center;
  margin: 20px;
  border: 4px solid #ff00d9;
  background: url(${orangesky});
  height: 90%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  @media (max-width: 1800px) {
    grid-area: 3 / 2 / 4 / 2;
  }
`;

const Grid6 = styled.div`
  grid-area: 2 / 3 / 3 / 5;
  justift-content: center;
  align-self: center;
  margin: 10px;
  border: 4px solid #ff00d9;
  background: url(${retrowave});
  height: 90%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  @media (max-width: 1800px) {
    grid-area: 4 / 1 / 5 / 3;
  }
`;

export default function SpaceGallary() {
  return (
    <PageDiv>
      <BackGround>
        <GridDiv>
          <Grid1></Grid1>
          <Grid2></Grid2>
          <Grid3></Grid3>
          <Grid4></Grid4>
          <Grid5></Grid5>
          <Grid6></Grid6>
        </GridDiv>
      </BackGround>
      <TakeOffRocket />
    </PageDiv>
  );
}
