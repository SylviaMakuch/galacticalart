import React, { useState, useEffect } from "react";
import styled from "styled-components";
import twinklestar from "./../../media/twinklestar.svg";
import mountain from "./../../media/mountain.png";
import mountain2 from "./../../media/mountain2.png";
import moon from "./../../media/moon.svg";
import { throttle } from "lodash";
import EarthGallary from "./EarthGallary";
import rocketbro from "./../../media/rocketbro.svg";
import { Link } from "react-router-dom";
import Footer from "./FooterEarth";

const Stars = styled.div`
    background-image: url(${twinklestar});
    background-repeat: repeat;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    width: 100%;
    height: 800vh;
    z-index: 0;
    overflow-x: hidden;
`;

const Moon = styled.img<{ $offset: number }>`
    height: 20vh;
    z-index: 1;
    display: block;
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
const Mountain2 = styled.img<{ $offset: number }>`
    height: 50vh;
    width: 50%;
    right: 50vh;
    bottom: 5px;
    z-index: 1;
    position: absolute;
    transform: translateY(${props => props.$offset * 0.7}px);
`;

const Welcome = styled.div <{ $offset: number }>`
    transform: translateY(${props => props.$offset * 0.6}px);
    transform: translateX(${props => props.$offset * -0.2}px);
    color: white;
    font-size: 300px;
    position: absolute;
    left: 350px;
    top: 60vh;
    z-index: 0.8;
`;

const VertTrans = styled.div <{ $offset: number }>`
    position: absolute;
    z-index: 3;
    top: 140vh;
    left: 100px;
    transform: translateY(${props => props.$offset * 0.2}px);
    display: flex;
    justify-items: center;
    align-items: center;
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 30vh;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 37px;
    margin: 10px;
    z-index: 1;
`;

const LiftOff = styled.img`
    height: 600px;
    width: 600px;
    justify-content: center;
`;

function MountainStar() {
    const [offSetY, setOffSetY] = useState(0);
    const handlescroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', throttle(handlescroll, 0));
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);

    return (
        <>
            <Stars>
                <Mountain2 src={mountain2} $offset={offSetY} />
                <Moon src={moon} $offset={offSetY} />
                <Welcome $offset={offSetY}> Welcome to Earth </Welcome>
                <Mountain src={mountain} $offset={offSetY} />
            </Stars>
            <VertTrans $offset={offSetY}>
                <EarthGallary />
            </VertTrans>
            <Footer />
            {/* <LinkDiv>
                <h1>To the Moon! </h1>
                <p>Click on the Image Below </p>
                <Link to="/main">  <LiftOff src={rocketbro} />
                </Link>
            </LinkDiv> */}
        </>
    );
}

export default MountainStar;