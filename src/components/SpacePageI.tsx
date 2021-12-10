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
    background-attachment: fixed;
    /* display: flex; */
    position: fixed;
    justify-content: center;
    align-items: center;
`

const BackDrop = styled.div`
        height: 80vh;
        margin: 20vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        align-content: flex-start;
        flex-wrap: wrap;
`

const MostLeftSide = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const LeftPics = styled.img`
    height: 100%;
    width: 28vh;
    margin: 10px;
    padding: 5px;
    border: 4px solid #ff00d9;
`

const VerticalPic = styled.img`
    height: 97%;
    width: 29vh;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`

const MostRightSide = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MakeRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
            @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
                flex-direction: column;
            }
    ;
`
const SmallPic = styled.img`
    height: 35vh;
    width: 29vh;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`

const HorizontalPic = styled.img`
    width: 61vh;
    height: 49.5%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9; 
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
            width: 29vh;
            } 
`

const LinkDic = styled.div`
    display: flex;
    justify-content: center;
    margin: 30vh;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 37px;
    margin: 10px;
    position: relative;
`

const LiftOff = styled.img`
    height: 600px;
    width: 600px;
    justify-content: center;
`

function SpacePageI() {
    return (
        <BackGround>
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
            <LinkDic>
                <h1>Hurry!</h1>
                <h3>We are flying down to Earth! </h3>
                <p>Click on the Image Below </p>
                <Link to="/earth">  <LiftOff src={rocketbro} />
                </Link>
            </LinkDic>
        </BackGround >
    );
}
export default SpacePageI;