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

`
const Layer1 = styled.div`
    height: 15%;
	background: #000000;
	animation: ${move} 0.8s ease-in;
	animation-delay: 0.9s ;
`
const Layer2 = styled.div`
	height: 15%;
    background: #393e46;
	animation: ${move} 0.8s ease-in;
	animation-delay:0.6s ;
`
const Layer3 = styled.div`
	height: 15%;
    background: #e9aeda;
	animation: ${move} 0.8s ease-in;
	animation-delay:0.4s ;
`
const Layer4 = styled.div`
	height: 15%;
    background: #6c5b7b;
	animation: ${move} 0.8s ease-in;
	animation-delay:0.3s ;
`
const Layer5 = styled.div`
	height: 15%;
    background: #00000024;
	animation: ${move} 0.8s ease-in;
	animation-delay:0.3s ;

`

export default function AnimationLayers() {
	return(
    <Layers>
        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
        <Layer5 />
    </Layers>
	)
};
