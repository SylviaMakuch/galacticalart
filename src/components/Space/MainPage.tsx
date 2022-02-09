import React from 'react';
import styled from 'styled-components';
import field from "./../../media/field.svg";
import caribeangirl from "./../../media/caribeangirl.jpg";
import Typewriter from 'typewriter-effect';
import SocialTab from './SocialTab';
import SpacePage from './SpacePage';
import Footer from '../Space/FooterSpace';
import artist from "./../../media/artist.jpg";
import arrowsvg from "../../media/arrow.svg"

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
    width: 930px;
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


const Arrow = styled.img`
    position: absolute;
    left: 44%;
    top: 85%;
`

function MainPage() {
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
                <Arrow src={arrowsvg} />
            </BackDrop>
            <SpacePage />
            <Footer />
        </>
    );
}
export default MainPage;