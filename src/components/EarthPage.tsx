import React from 'react';
import styled from 'styled-components';
import trees from "./../media/trees.jpg";
import snowyroad from "./../media/snowyroad.jpg";
import beach from "./../media/beach.jpg";
import pirateboat from "./../media/pirateboat.jpg";
import northenlights from "./../media/northenlights.jpg";

const MainDiv = styled.div`
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    margin: 10px;
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