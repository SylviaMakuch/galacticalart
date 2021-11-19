import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AnimationLayers from "./AnimationLayers";

const YesBtn = styled.button`
    display: flex;
    justify-content: center;
`
export default function AnimationSpace() {
    const [isBtnClicked, setBtnClicked] = useState(false);


    return (
        <div>
            {!isBtnClicked && <button onClick={(e) => setBtnClicked(!isBtnClicked)}>YES!</button>}
            {isBtnClicked && <AnimationLayers />}
        </div>
    )
};