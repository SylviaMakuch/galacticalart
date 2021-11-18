import React from 'react';
import styled from 'styled-components';
import stars from './media/stars.svg';
import spaceface from "./media/spaceface.jpg";
import funkyriver from "./media/funkyriver.jpg"
import octo from "./media/octo.jpg";
import retrowave from "./media/retrowave.jpg";
import orangesky from "./media/orangesky.jpg";
import mushrooms from "./media/mushrooms.jpg";

const BackDrop = styled.div`
    height: 300vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-image: url(${stars});
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;

`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`
const LeftPics = styled.img`
    height: 45vh;
    width: 40vh;
    margin: 5% 5% 5% 5%;
    padding: 2%;
    border: 4px solid #ff00d9;
`

const RightPic = styled.img`
    height: 94vh;
    width: 40vh;
    margin: 5%;
    padding: 2%;
    border: 4px solid #ff00d9;
`
const SmallPic = styled.img`
    height: 45vh;
    width: 40vh;
    margin: 4% 1% 2% 1%;
    padding: 2%;
    border: 4px solid #ff00d9;
`

const LongPic = styled.img`
    height: 50vh;
    width: 90vh;
    margin: 0% 10% 0% 10%;
    padding: 2%;
    border: 4px solid #ff00d9;
 `   

function SpacePageI() {
    return (
        <BackDrop>
            <LeftSide>
                <LeftPics src={spaceface}/>
                <LeftPics src={funkyriver}/>
            </LeftSide>
            <RightPic src={octo} />
            <LongPic src={retrowave} />
            <SmallPic src={orangesky} />
            <SmallPic src={mushrooms} />

        </BackDrop>

        );
    }
export default SpacePageI;