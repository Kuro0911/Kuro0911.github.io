import React, { useState } from "react";
import AboutWrapper, { Container, JpWrapper } from "./about.style";

export const About = () => {
  const [text, setText] = useState("About");
  const handleChange = () => {
    text === "アバウト" ? setText("About") : setText("アバウト");
  };
  return (
    <AboutWrapper id="about">
      <Container>
        <JpWrapper onPointerEnter={handleChange} text={text}>
          <text>{text}</text>
        </JpWrapper>
      </Container>
    </AboutWrapper>
  );
};
