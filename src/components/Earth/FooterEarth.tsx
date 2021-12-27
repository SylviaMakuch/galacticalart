import React from "react";
import styled from "styled-components";
import SocialTab from "./../Space/SocialTab";
import rocketbro from "./../../media/rocketbro.svg";
import { Link } from "react-router-dom";

const BackGround = styled.div`
    width: 100%;
    top: 1700px;
    background-color: #069d9a;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 1200px;
    z-index: 3;
 `;

const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 37px;
    z-index: 2;
`;

const LiftOff = styled.img`
    height: 600px;
    width: 600px;
    justify-content: center;
`;

export default function Footer() {
    return (
        <BackGround >
               <LinkDiv>
                <h1>Back to Space? </h1>
                <p>Click on the Image Below </p>
                <Link to="/main">  <LiftOff src={rocketbro} />
                </Link>
            </LinkDiv>
            <Text> Thank you for coming to visit my Art Gallary !</Text>
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
        </BackGround>
    )
};