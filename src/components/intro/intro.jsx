import React, { useState } from "react";
import IntroWrapper, {
  Container,
  DesContainer,
  GreetContainer,
  NameContainer,
} from "./intro.style";
import "animate.css";

export const Intro = () => {
  const [firstName, setFirstName] = useState("Dhananjai");
  const handleChangeF = () => {
    firstName === "Dhananjai"
      ? setFirstName("ダナンジャイ")
      : setFirstName("Dhananjai");
  };
  return (
    <IntroWrapper id="intro">
      <Container>
        <GreetContainer>
          <text>Hello everyone i am</text>
          <br />
          <text className="jp">こんにちはみんなさん私は</text>
        </GreetContainer>
        <NameContainer text={firstName}>
          <text onMouseEnter={handleChangeF} onMouseLeave={handleChangeF}>
            {firstName}
          </text>
          <text className="lname"> Sharma</text>
        </NameContainer>
        <DesContainer>
          <text>I build stuff for the web</text>
          <br />
          <text className="jp">私はウェブ用のものを作ります</text>
        </DesContainer>
      </Container>
    </IntroWrapper>
  );
};
