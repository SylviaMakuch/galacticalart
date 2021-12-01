import React from 'react';
import styled from 'styled-components';

const ArtImg = styled.img`
    height: 300px;
    width: 300px;
`

export default function ArtImage({ image =  [] }) {
    return(
        <ArtImg src={image} />
    )
};