import React from 'react';
import styled from 'styled-components';
import field from "./../media/field.svg";
import caribeangirl from "./../media/caribeangirl.jpg";
import artist from "./../media/artist.jpg";
import Typewriter from 'typewriter-effect';
import SocialTab from './SocialTab';
import SpacePageI from './SpacePageI';

const BackDrop = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    background-image: url(${field});
    justify-content: center;
    background-repeat: no-repeat;
`

const ProfilePic = styled.img`
    height: 20vh;
    border-radius: 50%;
    padding: 6px;
    border: 5px solid white;
`

const CaribeanGirl = styled.img`
    height: 40vh;
    width: 40vh;
    margin: 5% 2% 0 0;
    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
            height: 20vh;
            width: 20vh;
        }
`
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
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
            height: 20vh;
            width: 20vh;
            line-height: 0vh;
        }
`

const TextDiv = styled.div`
    background-color: #000000a7;
    height: 28vh;
    width: 98vh;
    margin: 5%;
    color: white;
    font-size: 100px;
    text-align: center;
    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){
        height: 15vh;
        width: 50vh;
        }
`

function MainPage() {
    return (
        
        <BackDrop>
            <CaribeanGirl src={caribeangirl} />
            <SocialDiv> Sylvia Makuch
                <ProfilePic src={artist}/>
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
            <SpacePageI />
        </BackDrop>
    );
}
export default MainPage;