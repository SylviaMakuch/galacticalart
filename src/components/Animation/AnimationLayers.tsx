import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Layers = styled.div`
  	height: 200px;
	width: 100%;
`
const Layer1 = styled.div`
    height: 20%;
	background: #6c567b;
	@keyframes mymove {
		from {top: 0px;}
		to {top: 200px;}
	}
`
const Layer2 = styled.div`
	height: 20%;
    background: #393e46;
	transition-delay: 0.6s;
`
const Layer3 = styled.div`
	height: 20%;
    background: #6c5b7b;
	transition-delay: 0.4s;
`
const Layer4 = styled.div`
	height: 20%;
    background: #c06c84;
	transition-delay: 0.2s;	
`
const Layer5 = styled.div`
	height: 20%;
    background: #f67280;
	transition-delay: 0.1s;

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
