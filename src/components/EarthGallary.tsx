import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';
import { Link } from 'react-router-dom';

const Body = styled.div`
    width: 174vh;
    height: 400vh;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
`

const Card = styled.div`
   
`

export default function EarthGallary() {
    return (
    <Link to="EarthGallary" >   
        <Body>
                <Card>
                    {
                    earthData.map(({ image }, index) => {
                        return <ArtImage image={image} key={index} />
                    })
                }   
                </Card>
        </Body>
    </Link>    
    );
};