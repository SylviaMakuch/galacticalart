import React from "react";
import styled from "styled-components";
import SocialTab from "./SocialTab";
import theworldisyours from "./../media/theworldisyours.jpg";


const BackGround = styled.div`
    position: relative;
    top: 90vh;
    bottom: 10px;
    background-color: #ec5df3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
`;

const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`;

const Img = styled.img`
    width: 40vh;
` ;  

export default function Footer() {
    return (
        <BackGround >
            <Img src={theworldisyours} />
            <Text> Thank you for coming to visit my Art Gallary !</Text>
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
        </BackGround>
    )
};