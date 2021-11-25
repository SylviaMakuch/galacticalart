import React from 'react';
import styled from 'styled-components';
import trees from "./../media/trees.jpg";
import snowyroad from "./../media/snowyroad.jpg";
import beach from "./../media/beach.jpg";
import pirateboat from "./../media/pirateboat.jpg";
import northenlights from "./../media/northenlights.jpg";
import stars from './../media/stars.svg';


const BackGround = styled.div`
    background-image: url(${stars});
`
const MainDiv = styled.div`
    height: 100vh;
    width: 150vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-image: url(${stars});
`
const Trees = styled.img`
    width: 56%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const MakeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
            flex-direction: column;
        }
    ;
`
const SnowRoad = styled.img`
    width: 30%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const Beach = styled.img`
    width: 24%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const PirateBoat = styled.img`
    width: 36%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const NorthLights = styled.img`
    width: 24%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;  
`

function EarthPage() {
    return (
        <BackGround>
            <MainDiv>
                <MakeRow>
                <SnowRoad src={snowyroad} />
                <Trees src={trees} />
                </MakeRow>
                <Beach src={beach} />
                <PirateBoat src={pirateboat} />
                <NorthLights src={northenlights} />
            </MainDiv>
        </BackGround>
    );
}
export default EarthPage;