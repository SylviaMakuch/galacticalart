import React, { useState, useEffect } from "react";
import styled from "styled-components";
import twinklestar from "./../media/twinklestar.svg";
import mountain from "./../media/mountain.png";
import moon from "./../media/moon.svg";
import EarthPage from "./EarthPage";

const Contain = styled.div` 
    min-height: 400vh;
`
const Stars = styled.div`
    background-image: url(${twinklestar});
    min-height: 1000vh; 
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
`
const Moon = styled.img`
    height: 20vh;
    z-index: 1;
    position: absolute;
    left: 70px;
    top: 70vh;
`
const Mountain = styled.img`
    height: 100vh;
    width: 100%;
    z-index: 2;
    position: absolute;  
`
function MountainStar() {
    const [offSetY, setOffSetY] = useState(0);
    const handlescroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);
    return (
        <Stars>
            <Contain>
                <Moon src={moon} style={{ transform: `translateY(${offSetY * -0.5}px)` }} />
                <Mountain src={mountain} />
            </Contain>
            <EarthPage />
        </Stars>


    );
}
export default MountainStar;