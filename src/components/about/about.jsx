import React, { useState } from "react";
import AboutWrapper, {
  Container,
  ImageContainer,
  JpWrapper,
  TextWrapper,
} from "./about.style";
import profile from "./utils/profile.jpg";
import Image from "mui-image";

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
        <ImageContainer>
          <Image src={profile} width={300} height={300} />
        </ImageContainer>
        <TextWrapper></TextWrapper>
      </Container>
    </AboutWrapper>
  );
};
