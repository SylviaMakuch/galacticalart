import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';

const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center ;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 3; 
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