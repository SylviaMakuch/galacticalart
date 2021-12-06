import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthGallary';
import { Link } from 'react-router-dom';

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    box-sizing: border-box; 
    place-items:center;
     ;
`

const Container = styled.div`
    max-width: 600px;
    max-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    :hover{
        opacity:0.3;
    } 
`

const Card = styled.div`
    width: 30%;
    height: 100%;
    object-fit: cover;
    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s;
    --webkit-box-reflect: below 2px linear-gradient(transparent, transparent, #0004);    
    :hover{
        transform: perspective(800px);       
        transform: rotateY(0deg);
         opacity:1;
    }
`

export default function EarthGallary() {
    return (
    <Link to="EarthGallary" >   
        <Body>
            <Container>
                <Card>
                    {
                    earthData.map(({ image }, index) => {
                        return <ArtImage image={image} key={index} />
                    })
                }   
                </Card>
            </Container>
        </Body>
    </Link>    
    );
};