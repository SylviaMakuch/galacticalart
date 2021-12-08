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
        height: 600vh;
        width: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
`

const BackDrop = styled.div`
    height: 20vh;
    margin: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
`

const VerticalPic = styled.img`
    grid-area: 1/1/3/2;
    border: 4px solid #ff00d9;
    height: 100%;
`

const SpaceFace = styled.img`
    grid-area: 1/2/2/3;
    border: 4px solid #ff00d9;
    height: 100px;
    width: 100px;
`

const RetroWave = styled.img`
    grid-area: 2/3/3/5;
    border: 4px solid #ff00d9; 
    height: 100px;
    width: 100px;
`

const FunkyRiver = styled.img`
    grid-area: 2/2/3/3;
    border: 4px solid #ff00d9; 
    height: 100px;
    width: 100px;
`
const OrangeMush = styled.div`
   grid-area: 1/3/2/4;
   justify-content: space-evenly;
`
const OrangeSky = styled.img`
    border: 4px solid #ff00d9; 
    height: 100px;
    width: 100px;
`

const Mushrooms = styled.img`
    border: 4px solid #ff00d9;
    height: 100px;
    width: 100px;
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
                <FunkyRiver src={funkyriver} />
                <OrangeMush>
                    <OrangeSky src={orangesky} />
                    <Mushrooms src={mushrooms} />
                </OrangeMush>
                <RetroWave src={retrowave} />
            </BackDrop>
        </BackGround >
    );
}
export default SpacePage;