import React from 'react';
import styled from 'styled-components';
import field from "./../../media/field.svg";
import caribeangirl from "./../../media/caribeangirl.jpg";
import Typewriter from 'typewriter-effect';
import SocialTab from './SocialTab';
import SpacePage from './SpacePage';
import Footer from '../Space/FooterSpace';
import artist from "./../../media/artist.jpg";

const BackDrop = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-size: cover;
    background-image: url(${field});
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
`;

const UpperRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ProfilePic = styled.img`
    height: 150px;
    border-radius: 50%;
    padding: 6px;
    border: 5px solid white;
`;

const CaribeanGirl = styled.img`
    height: 350px;
    width: 350px;
    margin: 50px;
`;

const SocialDiv = styled.div`
    background-color: #ff00b77b;
    line-height: 7vh;
    height: 350px;
    width: 350px;
    margin: 50px;
    color: white;
    font-size: 50px;
    display: grid;
    align-content: end;
    justify-content: center;
    justify-items: center;
    align-content: space-between;
    @media(max-width: 900px){
        font-size: 40px;
    }
`;

const TextDiv = styled.div`
display: block;
    background-color: #000000a7;
    width: 1000px;
    margin: 5%;
    color: white;
    font-size: 80px;
    text-align: center;
    padding: 50px;
    @media (max-width: 1200px){
        height: 17vh;
        font-size: 50px;
        padding: 50px;
        }
`;



export default function Hero() {
    return (
        <>
            <BackDrop>
                <UpperRow>
                    <CaribeanGirl src={caribeangirl} />
                    <SocialDiv> Sylvia Makuch
                        <ProfilePic src={artist} />
                        <SocialTab />
                    </SocialDiv>
                </UpperRow>
                <TextDiv>
                    <Typewriter
                        options={{
                            strings: ['Welcome!', 'Are you ready for some space Travel?'],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                        }}
                    />
                </TextDiv>

            </BackDrop>
            <SpacePage />
            <Footer />
        </>
    );
}