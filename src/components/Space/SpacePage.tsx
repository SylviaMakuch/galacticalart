import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import SpaceGallary from "./SpaceGallaryGrid";
import Footer from "./FooterSpace";
import TakeOffRocket from "./TakeOffRocket";

const PageDiv = styled.div`
    display: flex;
    flex-direction: column; 
`;

export default function SpacePage() {
    return (
        <PageDiv>
            <Hero />
            <SpaceGallary />
        </PageDiv>
    );
}