import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { keyframes } from "styled-components";

export default function AnimationSpace() {
	const [isBtnClicked, setBtnClicked] = useState(false);

	const move = keyframes`
	0%,100%{
		transform: translateX(0px);
	}
	50%{
		transform: translateX(100%)
	}
`

	const MoveBtn = keyframes`
	0%,{
		transform: scale(0px);
	}
	90%{
		transform: scale(30px)
	}
`

	const Layers = styled.div`
  	height: 100%;
	width: 100%;
	display: flex ;
	position: fixed;
`

	const Layer1 = styled.div`
    height: 100%;
	width: 33%;
	background: #e40909f9;
	animation: ${move} 0.6s ease-in-out;
	animation-delay: 0.7s ;
`

	const Layer2 = styled.div`
    height: 100%;
	width: 33%;
    display: flex;
    align-items: center;
	justify-content: center;
    background: #393e46f9;
	animation: ${move} 0.6s ease-in-out;
	animation-delay:0.6s ;
`

	const Layer3 = styled.div`
    height: 100%;
	width: 34%;
    background: #e9aedafb;
	animation: ${move} 0.6s ease-in-out;
	animation-delay:0.4s ;
`

	const BtnLetsGo = styled.button`
	background: linear-gradient(45deg, #c13333, transparent);
	color: #fffeff;
	animation: ${MoveBtn} 0.8s ease-in;
	height: 130px;
	width: 130px;
	border-radius: 10%;
	box-shadow: black;
	border-color: #ffffff;
	
`

	return (
		<Layers>
			<Layer1 />
			<Layer2>
				<div>
					{!isBtnClicked && <BtnLetsGo onClick={(e) => setBtnClicked(!{isBtnClicked})}> Let's Go!</BtnLetsGo>}
				</div>
			</Layer2>
			<Layer3 />
		</Layers>
	)
};
