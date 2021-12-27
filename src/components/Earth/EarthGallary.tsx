import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';
import { Link } from 'react-router-dom';

const Body = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    justify-items: center;
    align-items: center ;
    overflow-x: hidden;
    z-index: 3;
    @media(max-width: 1612px){
        grid-template-columns: repeat(2, 1fr); 
    }
    @media(max-width: 1000px){
        grid-template-columns: repeat(1, 1fr); 
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