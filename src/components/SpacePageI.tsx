import React from 'react';
import styled from 'styled-components';
import stars from './../media/stars.svg';
import spaceface from "./../media/spaceface.jpg";
import funkyriver from "./../media/funkyriver.jpg"
import octo from "./../media/octo.jpg";
import retrowave from "./../media/retrowave.jpg";
import orangesky from "./../media/orangesky.jpg";
import mushrooms from "./../media/mushrooms.jpg";

const BackDrop = styled.div`
    height: 80vh;
    margin: 20px;
    display: flex;
    align-items: flex-start;
    background-size: cover;
    background-image: url(${stars});
    background-attachment: fixed;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
const PurpleDiv = styled.div`
    background-color: #ff00ff;
    width: 30%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`

function SpacePageI() {
    return (
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

    );
}
export default SpacePageI;