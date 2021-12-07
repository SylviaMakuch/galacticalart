import React from 'react';
import styled from 'styled-components';
import trees from "./../media/trees.jpg";
import snowyroad from "./../media/snowyroad.jpg";
import beach from "./../media/beach.jpg";
import pirateboat from "./../media/pirateboat.jpg";
import northenlights from "./../media/northenlights.jpg";
import stars from './../media/stars.svg';

 
const MainDiv = styled.div`
    height: 100vh;
    width: 150vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Trees = styled.img`
    width: 56%;
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: white;
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
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: white;
`
const Beach = styled.img`
    width: 24%;
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: white;
`
const PirateBoat = styled.img`
    width: 36%;
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: white;
`
const NorthLights = styled.img`
    width: 24%;
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-width: 6px;
    border-color: white;
`

function EarthPage() {
    return (
    
            <MainDiv>
                <MakeRow>
                <SnowRoad src={snowyroad} />
                <Trees src={trees} />
                </MakeRow>
                <Beach src={beach} />
                <PirateBoat src={pirateboat} />
                <NorthLights src={northenlights} />
            </MainDiv>
    );
}
export default EarthPage;