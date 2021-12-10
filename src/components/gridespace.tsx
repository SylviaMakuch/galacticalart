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
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const BackGround = styled.div`
    background-image: url(${stars});
    height: 600vh;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const BackDrop = styled.div`
    margin: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 4vh;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const VerticalPic = styled.img`
    grid-area: 1/1/3/2;
    border: 4px solid #ff00d9;
    height: 104vh;
    width: 35vh;
`

const SpaceFace = styled.img`
    grid-area: 1/2/2/3;
    border: 4px solid #ff00d9;
    height: 50vh;
    width: 50vh;
    @media (max-width: 1200px) {
        width: 35vh;
    }
`

const RetroWave = styled.img`
    grid-area: 2/2/3/3;
    border: 4px solid #ff00d9; 
    width: 50vh;
    height: 50vh;
    @media (max-width: 1200px) {
        width: 35vh;
    }
`

const FunkyRiver = styled.img`
    grid-area: 2/3/3/5;
    border: 4px solid #ff00d9; 
    height: 50vh;  
    @media (max-width: 1200px) {
        width: 35vh;
        
`

/* const OrangeMush = styled.div`
   grid-area: 1/3/2/4;
   grid-gap: 1vh;
`

const OrangeSky = styled.img`
    border: 4px solid #ff00d9; 
    height: 50vh;
    width: 35vh;
` */

const Mushrooms = styled.img`
    border: 4px solid #ff00d9;
    height: 50vh;
    @media (max-width: 1200px) {
        width: 35vh;
    }
`

const LiftOff = styled.img`
    height: 600px;
    width: 600px;
    justify-content: center;
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
`

function SpacePage() {
    return (
        <BackGround>
            <BackDrop>
                <VerticalPic src={octo} />
                <SpaceFace src={spaceface} />
                <RetroWave src={retrowave} />
                <FunkyRiver src={funkyriver} />
                <Mushrooms src={mushrooms} />
                {/* <OrangeMush> */}
                    {/* <OrangeSky src={orangesky} /> */}
                {/* </OrangeMush> */}
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
export default SpacePage;