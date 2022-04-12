import React from "react";
import styled from "styled-components";
import SocialTab from "./SocialTab";
import theworldisyours from "./../../media/theworldisyours.jpg";

const BackGround = styled.div`
    position: relative;
    width: 100%;
    top: 1700px;
    background-color: #ec5df3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    @media (max-width: 1880px){
        top: 2400px;
    }
`;

const Text = styled.div`  
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 32px;
    font-weight: 300;
    margin: 10px;
`;

const Img = styled.img`
    width: 600px;
` ;  

export default function Footer() {
    return (
        <BackGround >
            <Text> Thank you for coming to visit my Art Gallary !</Text>
            <Img src={theworldisyours} />
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
        </BackGround>
    )
};