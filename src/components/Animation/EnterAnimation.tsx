import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import stars from "./../media/stars.svg";

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
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.9s ease-in-out;
	
`;

const Layer2 = styled(BaseLayer)`
	background-image: url(${stars});
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.9s ease-in-out;
	animation-delay: 0.1s;
	flex-direction: column;;
`

const Layer3 = styled(BaseLayer)`
	background: #e99c9cfb;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.9s ease-in-out;
	animation-delay: 0.2s;
`;

const BtnLetsGo = styled.button`
	width: 25vh;
	height: 5vh;
	background: linear-gradient(45deg, #c13333, transparent);
	color: white;
	font-family: 'Montserrat', sans-serif;
	font-size: 1.2vh;
`;

const Gal = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-size: 4vh;
	color: white;
	text-align: center;
	letter-spacing: 2px;
	animation: ${titleMove} 7s linear;
`

export default function EnterAnimation() {
	const [isAnimationOpen, setIsAnimationOpen] = useState(true);

	return (
		<Layers>
			<Layer1 $isOpen={isAnimationOpen} />
			<Layer2 $isOpen={isAnimationOpen}>
				{isAnimationOpen && <Gal onClick={() => setIsAnimationOpen(false)}>You are Entering the Galatic Emporium </Gal>}
				{isAnimationOpen && <BtnLetsGo onClick={() => setIsAnimationOpen(false)}>Click Here
				if, you're ready</BtnLetsGo>}
			</Layer2>
			<Layer3 $isOpen={isAnimationOpen} />
		</Layers>
	)
};
