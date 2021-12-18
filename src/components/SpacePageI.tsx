import React from 'react';
import styled from 'styled-components';
import stars from './../media/stars.svg';
import spaceface from "./../media/spaceface.jpg";
import funkyriver from "./../media/funkyriver.jpg"
import octo from "./../media/octo.jpg";
import retrowave from "./../media/retrowave.jpg";
import orangesky from "./../media/orangesky.jpg";
import mushrooms from "./../media/mushrooms.jpg";
import rocketbro from "./../media/rocketbro.svg";
import { Link } from 'react-router-dom';

const BackGround = styled.div`
    background-image: url(${stars});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    width: 190vh;
    height: 290vh;
    position: absolute;
`;

const BackDrop = styled.div`
     height: 80vh;
    margin: 20vh;
    justify-content: center;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    @media and screen(max-width: 900px){
        flex-direction: column;
        flex-wrap: nowrap;
`;

const MostLeftSide = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const LeftPics = styled.img`
    height: 100%;
    width: 28vh;
    margin: 10px;
    padding: 5px;
    border: 4px solid #ff00d9;
`;

const VerticalPic = styled.img`
    height: 97%;
    width: 29vh;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`;

const MostRightSide = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MakeRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
        flex-direction: column;
    };
`;
const SmallPic = styled.img`
    height: 35vh;
    width: 29vh;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`;

const HorizontalPic = styled.img`
    width: 61vh;
    height: 49.5%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9; 
    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
        width: 29vh;
    } 
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 70vh;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 37px;
`;

const LiftOff = styled.img`
    height: 600px;
    width: 600px;
    justify-content: center;
`;

function SpacePageI() {
    return (
        <>
        <BackGround>
        </BackGround >
            <BackDrop>
                <VerticalPic src={octo} />
                <MostLeftSide>
                    <LeftPics src={spaceface} />
                    <LeftPics src={funkyriver} />
                </MostLeftSide>
                <MostRightSide>
                    <MakeRow>
                        <SmallPic src={orangesky} />
                        <SmallPic src={mushrooms} />
                    </MakeRow>
                    <HorizontalPic src={retrowave} />
                </MostRightSide>
            </BackDrop>
        <LinkDiv>
                <h1>Hurry!</h1>
                <h3>We are flying down to Earth! </h3>
                <p>Click on the Image Below </p>
                <Link to="/earth">  <LiftOff src={rocketbro} />
                </Link>
            </LinkDiv>
        </>
    );
}
export default SpacePageI;