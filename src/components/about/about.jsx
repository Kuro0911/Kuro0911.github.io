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
        <JpWrapper text={text}>
          <text onPointerEnter={handleChange}>{text}</text>
        </JpWrapper>
      </Container>
    </AboutWrapper>
  );
};
