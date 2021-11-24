import React from 'react';
import styled from 'styled-components';
import trees from "./media/trees.jpg";
import snowyroad from "./media/snowyroad.jpg";
import beach from "./media/beach.jpg";
import pirateboat from "./media/pirateboat.jpg";
import northenlights from "./media/northenlights.jpg";

const MainDiv = styled.div`
    height:100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    margin: 10px;
`
const Trees = styled.img`
    width: 62%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
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
const PurpleDiv = styled.div`
    background-color: #ff00ff;
    width: 30%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const SnowRoad = styled.img`
    width: 30%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const Beach = styled.img`
    width: 20%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const PirateBoat = styled.img`
    width: 40%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;
`
const NorthLights = styled.img`
    width: 40%;
    padding: 5px;
    margin: 10px;
    border: 4px solid #ff00d9;  
`

function EarthPage() {
    return (
        <MainDiv>
            <MakeRow>
             <SnowRoad src={snowyroad} />
            <PurpleDiv />
            <Trees src={trees} />
            </MakeRow>
            <Beach src={beach} />
            <PirateBoat src={pirateboat} />
            <NorthLights src={northenlights} />

        </MainDiv>
    );
}
export default EarthPage;