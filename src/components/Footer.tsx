import React from "react";
import styled from "styled-components";
import SocialTab from "./SocialTab";


const BackGround = styled.div`
    background-color: #F35D6F;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
`;

const Text = styled.div`
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 25px;
    font-weight: 300;
`;

const Img = styled.img`
    width: 20%;
` ;  

export default function Footer() {
    return (
        <BackGround id="contact">
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
        </BackGround>
    )
};