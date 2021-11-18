import React from 'react';
import styled from 'styled-components';
import stars from './media/stars.svg';

const BackDrop = styled.div`
    height: 160vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-image: url(${stars});
    justify-content: center;
`

const SmallPic = styled.img`
    height: 50vh;
    width: 45vh;
    margin: 5% 5% 5% 5%;
    padding: 2%;
    border: 4px solid #ff00d9;
`

const LongPic = styled.img`
    height: 43vh;
    width: 103vh;
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