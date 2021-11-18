import React from 'react';
import styled from 'styled-components';
import field from "./media/field.svg";
import caribeangirl from "./media/caribeangirl.jpg";
import Typewriter from 'typewriter-effect';

const BackDrop = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    background-size: cover;
    background-image: url(${field});
    justify-content: center;
    `
const CaribeanGirl = styled.img`
    height: 45vh;
    width: 48vh;
    margin: 5% 2% 0 0;
`
const SocialDiv = styled.div`
    background-color: #ff00b77b;
    height: 45vh;
    width: 48vh;
    margin: 5% 1% 0 0;
    color: white;
    
`
const TextDiv = styled.div`
    background-color: #000000a7;
    height: 30vh;
    width: 98vh;
    margin: 5%;
    color: white;
    font-size: 100px;
    text-align: center;
`
function MainPage() {
    return (
        <BackDrop>
            <CaribeanGirl src={caribeangirl} />
            <SocialDiv>Created by: Sylvia Makuch</SocialDiv>
            <TextDiv>
                <Typewriter
                    options={{
                        strings: ['Welcome!', 'Are you ready for some space Travel?'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </TextDiv>

        </BackDrop>
    );
}
export default MainPage;