import React from 'react';
import styled from 'styled-components';
import field from "./../../media/field.svg";
import caribeangirl from "./../../media/caribeangirl.jpg";
import Typewriter from 'typewriter-effect';
import SocialTab from './SocialTab';
import SpacePage from './SpacePage';
import doublearrow from "./../..//media/doublearrow.svg";
import Footer from '../Space/FooterSpace';
import artist from "./../../media/artist.jpg";

const BackDrop = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    background-size: cover;
    background-image: url(${field});
    justify-content: center;
    @media (max-width: 900px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const ProfilePic = styled.img`
    height: 20vh;
    border-radius: 50%;
    padding: 6px;
    border: 5px solid white;
`;

const CaribeanGirl = styled.img`
    height: 40vh;
    width: 40vh;
    margin: 5% 2% 0 0;
`;

const SocialDiv = styled.div`
    background-color: #ff00b77b;
    line-height: 7vh;
    height: 40vh;
    width: 40vh;
    margin: 5% 1% 0 0;
    color: white;
    font-size: 60px;
    display: grid;
    align-content: end;
    justify-content: center;
    justify-items: center;
    align-content: space-between;
`;

const TextDiv = styled.div`
display: block;
    background-color: #000000a7;
    height: 25vh;
    width: 98vh;
    margin: 5%;
    color: white;
    font-size: 100px;
    text-align: center;
    @media (max-width: 1200px){
        height: 17vh;
        font-size: 70px;
        padding: 5px;
        }
`;

function MainPage() {
    return (
        <>
            <BackDrop>
                <CaribeanGirl src={caribeangirl} />
                <SocialDiv> Sylvia Makuch
                    <ProfilePic src={artist} />
                    <SocialTab />
                </SocialDiv>
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
            <Footer/>
        </>
    );
}
export default MainPage;