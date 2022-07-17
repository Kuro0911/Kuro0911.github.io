import React, { useState } from "react";
import AboutWrapper, {
  Container,
  ImageContainer,
  JpWrapper,
  TextContainer,
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
        <TextWrapper>
          <TextContainer>
            <p>
              Heyy everyone!! My name is <code>Dhananjai</code> and i like to
              code.
            </p>
            <p>
              {" "}
              Okay so to be precise i like bulding things, solving problems and
              staring at my computer screen for 10 hours a day trying to figure
              out why is a div not centered AAAA!!!
              <p />
              <p>
                and yes I do code a bit well lets just say alot. I always wanted
                to create things and looking at things on the web just made my 8
                year old brain think that how is this working then one fine day
                i stumbled across <code>HTML & CSS</code> and when i got the
                tools all I had to do was start and so I did
              </p>
              <p>
                Also <code>Algorithms</code> do interest me alot when I learned
                about <code>Data Structures & Algorithms</code> a whole new
                field of Computer Science opened up infront of me from where i
                started learing more about algorithms and got into problem
                solving
              </p>
              <p>
                So yes it has been a fun ride and i expect it to get even better
                where i can learn more and explore
              </p>
              <p>
                Oh and did i mention that I am currently Junior at SRM Institute
                Of Science and Technology also i like the japanese culture and
                anime
              </p>
              <span>どぞ よろしく</span>
            </p>
          </TextContainer>
          <ImageContainer>
            <Image src={profile} width={300} height={300} />
          </ImageContainer>
        </TextWrapper>
      </Container>
    </AboutWrapper>
  );
};
