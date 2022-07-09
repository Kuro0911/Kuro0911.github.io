import React from "react";
import IntroWrapper, {
  Container,
  GreetContainer,
  NameContainer,
} from "./intro.style";

export const Intro = () => {
  return (
    <IntroWrapper id="intro">
      <Container>
        <GreetContainer>
          <text>Hello everyone i am</text>
        </GreetContainer>
        <NameContainer>
          <text className="head">Dhananjai Sharma</text>
        </NameContainer>
      </Container>
    </IntroWrapper>
  );
};
