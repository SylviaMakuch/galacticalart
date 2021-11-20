import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";

const moveIn = keyframes`
	0%, 100%{
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

const Layers = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	position: fixed;
`;

const BaseLayer = styled.div<{ $isOpen: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${props => props.$isOpen ? 100 : 0}%;
	width: ${props => props.$isOpen ? 33 : 0}%;
`;

const Layer1 = styled(BaseLayer)`
	background: #e40909f9;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.6s ease-in-out;
	animation-delay: 0.7s;
`;

const Layer2 = styled(BaseLayer)`
	background: #4e4a4a;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.6s ease-in-out;
	animation-delay: 0.6s;
`;

const Layer3 = styled(BaseLayer)`
	background: #e9aedafb;
	animation: ${props => props.$isOpen ? moveIn : moveOut} 0.6s ease-in-out;
	animation-delay: 0.4s;
`;

const BtnLetsGo = styled.button`
	background: linear-gradient(45deg, #c13333, transparent);
	height: 130px;
	width: 130px;
	border-radius: 10%;
	box-shadow: black;
	color: white;
`;

export default function EnterAnimation() {
	const [isAnimationOpen, setIsAnimationOpen] = useState(true);

	return (
		<Layers>
			<Layer1 $isOpen={isAnimationOpen} />
			<Layer2 $isOpen={isAnimationOpen}>
				{isAnimationOpen && <BtnLetsGo onClick={() => setIsAnimationOpen(false)}>Lets go</BtnLetsGo>}
			</Layer2>
			<Layer3 $isOpen={isAnimationOpen}/>
		</Layers>
	)
};
