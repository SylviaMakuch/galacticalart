import React from "react";
import styled from "styled-components";
import SocialTab from "./../Space/SocialTab";
import theworldisyours from "./../media/theworldisyours.jpg";


const BackGround = styled.div`
    position: relative;
    width: 100%;
    top: 1700px;
    background-color: #00fffb;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    z-index: 3;
    @media (max-width: 1600px){
        top: 100px;
    }
`;

const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`;

const Img = styled.img`
    width: 800px;
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