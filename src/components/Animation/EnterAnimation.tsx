import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import stars from "./../../media/stars.svg"
import { Link } from "react-router-dom";

const moveIn = keyframes`
	0%{
		transform: translateX(0px);
	}
	50% {
		transform: translateX(100%);
	}
`;

const moveOut = keyframes`
	0%, 100% {
		transform: translateX(100%);
	}
	50% {
		transform: translateX(0px);
	}
`;

const titleMove = keyframes`
	0% {
		transform: translateY(-950px);
	}
	100% {
		transform: translateY(0px);
	}
`;

const Layers = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	position: absolute;
	background-color: black;
`;

const BaseLayer = styled.div<{ $isOpen: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${props => props.$isOpen ? 100 : 0}%;
	width: ${props => props.$isOpen ? 33 : 0}%;
`;

const Layer1 = styled(BaseLayer)`
	background: #e40909;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 1.5s ease-in-out;
	
`;

const Layer2 = styled(BaseLayer)`
	background-image: url(${stars});
	animation: ${props => props.$isOpen ? moveIn : moveOut} 1.5s  ease-in-out;
	animation-delay: 0.1s;
	flex-direction: column;;
`

const Layer3 = styled(BaseLayer)`
	background: #e99c9cfb;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 1.5s  ease-in-out;
	animation-delay: 0.2s;
`;

const BtnLetsGo = styled.button`
	width: 15vh;
	height: 5vh;
	margin-top: 5vh;
	background: linear-gradient(45deg, #c13333, transparent);
	font-family: 'Montserrat', sans-serif;
	font-size: 1.2vh;
	:hover{ 
        transform: scale(1.05);
        transition: .5s;
		border: 2px solid white;
    }
`;

const BtnText = styled.a`
	color: white;
	font-family: fantasy;
	text-underline-position: under;	
`;

const Question = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-family: monospace;
	font-size: 4vh;
	color: white;
	text-align: center;
	letter-spacing: 2px;
	animation: ${titleMove} 4s linear;
`

export default function EnterAnimation() {
	const [isAnimationOpen, setIsAnimationOpen] = useState(true);

	return (
		<Layers>
			<Layer1 $isOpen={isAnimationOpen} />
			<Layer2 $isOpen={isAnimationOpen}>
				{isAnimationOpen && <Question onClick={() => setIsAnimationOpen(false)}>You are Entering the Galatic Emporium </Question>}
				{isAnimationOpen && <BtnLetsGo onClick={() => setIsAnimationOpen(false)}><Link to="/main"><BtnText>I am Ready</BtnText> </Link>
				</BtnLetsGo>}
			</Layer2>
			<Layer3 $isOpen={isAnimationOpen} />
		</Layers>
	)
};
