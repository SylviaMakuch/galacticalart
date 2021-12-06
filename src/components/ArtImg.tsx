import React from 'react';
import styled from 'styled-components';

const ArtImg = styled.img`
    height: 300px;
    width: 300px;
`
interface ArtImageProps {
    image: string;
}

export default function ArtImage({image}: ArtImageProps) {
    return(
        <ArtImg src={image} />
    )
};