import React, { useState, useEffect } from "react";
import styled from "styled-components";
import twinklestar from "./../media/twinklestar.svg";
import mountain from "./../media/mountain.png";
import moon from "./../media/moon.svg";
import EarthPage from "./EarthPage";

const Contain = styled.div` 
    min-height: 400vh;
`;

const Stars = styled.div`
    background-image: url(${twinklestar});
    min-height: 1000vh; 
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
`;

const Moon = styled.img<{ $offset: number }>`
    height: 20vh;
    z-index: 1;
    position: absolute;
    left: 350px;
    top: 60vh;
    transform: translateY(${props => props.$offset * -0.3}px);
    transform: translateX(${props => props.$offset * 0.7}px);
`;

const Mountain = styled.img<{ $offset: number }>`
    height: 100vh;
    width: 100%;
    z-index: 2;
    position: absolute;
    transform: translateY(${props => props.$offset * 0.7}px);
`;

const Welcome =styled.div <{ $offset: number }>`
    transform: translateY(${props => props.$offset * 0.6}px);
    transform: translateX(${props => props.$offset * -0.7}px);
    color: white;
    font-size: 300px;
    position: absolute;
    left: 350px;
    top: 60vh;
    z-index: 0.8;
`

function MountainStar() {
    const [offSetY, setOffSetY] = useState(0);
    const handlescroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);

    return (
        <Stars>
            <Contain>
                <Moon src={moon} $offset={offSetY} />
                <Mountain src={mountain} $offset={offSetY} />
                <Welcome $offset={offSetY}> Welcome to Earth </Welcome>
            
            </Contain>
            <EarthPage />
        </Stars>
    );
}

export default MountainStar;