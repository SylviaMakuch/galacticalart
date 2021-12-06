import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';
import { Link } from 'react-router-dom';

const Body = styled.div`
    width: 400vh;
    height: 00vh;
    display: flex;
    opacity: 0.8;
    z-index: 7;
 
`

const Card = styled.div`
   :hover{
         opacity:0.8;
    }
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