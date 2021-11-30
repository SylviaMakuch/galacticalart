import React from 'react';
import styled from 'styled-components';
import EarthData from "./configEarthPage";

const EarthBody = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#000;
    display:grid;
    place-items:center;
`

const EarthContainer = styled.div`
    max-width:600px;
    max-height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    :hover{
        opacity:0.3;
    } 
`

const EarthCard = styled.div`
    width: 30%;
    height: 100%;
    object-fit:cover;
    transform-origin:center;
    transform:perspective(800px) rotateY(25deg);
    transition:0.5s;
    --webkit-box-reflect: below 2px linear-gradient(transparent, transparent, #0004);
    :hover{
        transform:perspective(800px);       
        rotateY(0deg);
         opacity:1;
    }
`