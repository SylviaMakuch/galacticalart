import React from 'react';
import styled from 'styled-components';
import ArtImage from "./ArtImg";
import { earthData } from './configEarthPage';

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#000;
    display:grid;
    place-items:center;
`

const Container = styled.div`
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

const Card = styled.div`
    width: 30%;
    height: 100%;
    object-fit:cover;
    transform-origin:center;
    transform:perspective(800px) rotateY(25deg);
    transition:0.5s;
    --webkit-box-reflect: below 2px linear-gradient(transparent, transparent, #0004);    
    :hover{
        transform: perspective(800px);       
        transform: rotateY(0deg);
         opacity:1;
    }
`

const EarthImage = styled.img`
`

export default function EarthArt() {
    return (
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
    );
};