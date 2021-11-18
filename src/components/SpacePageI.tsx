import React from 'react';
import styled from 'styled-components';
import stars from './media/stars.svg';
import spaceface from "./media/spaceface.jpg";
import funkyriver from "./media/funkyriver.jpg"
import octo from "./media/octo.jpg";

const BackDrop = styled.div`
    height: 160vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-image: url(${stars});
    justify-content: center;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`
const LeftPics = styled.img`
    height: 50vh;
    width: 45vh;
    margin: 5% 5% 5% 5%;
    padding: 2%;
    border: 4px solid #ff00d9;
`

const RightPic = styled.img`
    height: 103vh;
    width: 45vh;
    margin: 5%;
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

        </BackDrop>

        );
    }
export default SpacePageI;