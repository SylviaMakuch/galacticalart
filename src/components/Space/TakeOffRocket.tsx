import React from "react";
import styled from "styled-components";
import stars from "./../../media/stars.svg";
import rocketbro from "./../../media/rocketbro.svg";
import { Link } from "react-router-dom";

const BackGround = styled.div`
  background: url(${stars}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const LinkDiv = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Roboto Mono", monospace;
  font-size: 37px;
  text-align: center;
  margin: 100px;
`;

const LiftOff = styled.img`
  height: 600px;
  width: 600px;
  justify-content: center;
  margin: 50px;
`;

export default function TakeOffRocket() {
  return (
    <BackGround>
      <LinkDiv>
        <h1>Hurry!</h1>
        <h3>We are flying down to Earth! </h3>
        <p>Click on the Image Below </p>
        <Link to="/earth">
          {" "}
          <LiftOff src={rocketbro} />
        </Link>
      </LinkDiv>
    </BackGround>
  );
}
