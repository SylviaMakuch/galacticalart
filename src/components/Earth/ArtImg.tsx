import React from 'react';
import styled from 'styled-components';

const ArtImg = styled.img`
    height: 400px;
    width: 400px;  
    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s;
    padding: 80px;
    --webkit-box-reflect: below 2px linear-gradient(transparent, transparent, #0004);    
    :hover{
        transform: perspective(800px);       
        transform: rotateY(0deg);
    }
`
interface ArtImageProps {
    image: string;
}

export default function ArtImage({image}: ArtImageProps) {
    return(
        <ArtImg src={image} />
    )
};