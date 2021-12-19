import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';
import { Link } from 'react-router-dom';

const Body = styled.div`
    width: 100%;
    height: 400vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center ;
    overflow-x: hidden;
    z-index: 3;
    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
        grid-template-columns: repeat(2, 1fr); 
    }
`; 

export default function EarthGallary() {
    return (   
        <Body>
                    {
                    earthData.map(({ image }, index) => {
                        return <ArtImage image={image} key={index} />
                    })
                }   
        </Body>
    );
};