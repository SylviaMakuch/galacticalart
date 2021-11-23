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
    flex-wrap: wrap 
    ;
`
const Trees = styled.div`
`
const PurpleDiv = styled.div`
background-color: #ff00ff73;
`
const SnowRoad = styled.div`
`
const Beach = styled.div`
`
const PirateBoat = styled.div`
`
const NorthLights = styled.div`
`

function EarthPage() {
    return (
        <MainDiv>
            <Trees src={trees} />
            <PurpleDiv />
            <SnowRoad src={snowyroad} />
            <Beach src={beach} />
            <PirateBoat src={pirateboat} />
            <NorthLights src={northenlights} />

        </MainDiv>
    );
}
export default EarthPage;