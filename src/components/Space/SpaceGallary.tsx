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
  height: 100%;
  x-index: -1;
`;

const GalleryDiv = styled.div`
  height: 866px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 80px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const LeftContainerRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LeftDivPics = styled.img`
  width: 300px; 
  margin: 10px;
  padding: 5px;
  border: 4px solid #ff00d9;
  height: 85%;
`;

const VerticalPic = styled.img`
  height: 96.7%;
  padding: 5px;
  margin: 10px;
  border: 4px solid #ff00d9;
`;

const RightContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RightContainerTopDiv = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen (max-device-width: 1200px) {
    flex-direction: column;
  } ;
`;

const SmallPic = styled.img` 
  padding: 5px;
  margin: 10px;
  border: 4px solid #ff00d9;
`;

const HorizontalPic = styled.img`
  height: 46.7%;
  padding: 5px;
  margin: 10px;
  border: 4px solid #ff00d9;
`;

export default function SpaceGallary() {
  return (
      <PageDiv>
    <BackGround>
      <GalleryDiv>
        <LeftContainer>
          <VerticalPic src={octo} />
          <LeftContainerRightDiv>
            <LeftDivPics src={spaceface} />
            <LeftDivPics src={funkyriver} />
          </LeftContainerRightDiv>
        </LeftContainer>
        <RightContainer>
          <RightContainerTopDiv>
            <SmallPic src={orangesky} />
            <SmallPic src={mushrooms} />
          </RightContainerTopDiv>
          <HorizontalPic src={retrowave} />
        </RightContainer>
      </GalleryDiv>
    </BackGround>
    <TakeOffRocket />
    </PageDiv>
  );
}
