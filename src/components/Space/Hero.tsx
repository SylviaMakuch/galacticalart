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
    background-size: cover;
    background-image: url(${field});
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
`;

const UpperRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (max-width: 1100px){
        flex-direction: column;
    }
`;

const ProfilePic = styled.img`
    height: 150px;
    border-radius: 50%;
    padding: 6px;
    border: 5px solid white;
`;

const CaribeanGirl = styled.img`
    height: 450px;
    width: 450px;
    margin: 50px;
`;

const SocialDiv = styled.div`
    background-color: #ff00b77b;
    line-height: 7vh;
    height: 350px;
    width: 350px;
    padding: 50px;
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
    height: 300px;
    margin: 5%;
    color: white;
    font-size: 80px;
    text-align: center;
    padding: 50px;
    @media (max-width: 1200px){
        height: 17vh;
        font-size: 60px;
        padding: 50px;
        width: 80%;
        }
`;

const PageDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 100px;
`


export default function Hero() {
    return (
        <>
            <BackDrop>
                <PageDiv>
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
            </PageDiv>
            </BackDrop>
            <SpacePage />
            <Footer />
        </>
    );
}