import React from "react";
import styled from "styled-components";
import twinklestar from "./../media/twinklestar.svg";
import mountain from "./../media/mountain.png";
import moon from "./../media/moon.svg";
import EarthPage from "./EarthPage";

const Contain =styled.div` 
    min-height: 400vh;
`
const Stars = styled.div`
    background-image: url(${twinklestar});
    min-height: 1000vh; 
    width: 2000px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
`
const Moon = styled.img`
    height: 50vh;
    z-index: 1;
    position: relative;
    left: 70px;
    top: 80vh;
`
const Mountain = styled.img`
    height: 100vh;
    width: 2000px;
    z-index: 2;
    position: fixed;
    transform: translate(-50%, -50%);   
`
function MountainStar() {
    return(
            <Stars>
                <Contain>
                    <Moon src={moon}/>
                    <Mountain src={mountain} />
                </Contain>
                <EarthPage />
            </Stars>


    );
}
export default MountainStar;