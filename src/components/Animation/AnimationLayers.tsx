import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const move =keyframes`
	0%,100%{
		transform: translateY(0px);
	}
	50%{
		transform: translateY(100px)
	}
`
const Layers = styled.div`
  	height: 500px;
	width: 100%;
	display: flex ;
`
const Layer1 = styled.div`
    height: 100%;
	width: 15%;
	background: #e40909;
	animation: ${move} 0.6s ease-in-out;
	animation-delay: 0.7s ;
`
const Layer2 = styled.div`
    height: 100%;
	width: 15%;
    background: #393e46;
	animation: ${move} 0.6s ease-in-out;
	animation-delay:0.6s ;
`
const Layer3 = styled.div`
    height: 100%;
	width: 15%;
    background: #e9aeda;
	animation: ${move} 0.6s ease-in-out;
	animation-delay:0.4s ;
`

export default function AnimationLayers() {
	return(
    <Layers>
        <Layer1></Layer1>
        <Layer2 />
        <Layer3 />
    </Layers>
	)
};
