import React from "react";
import { useState } from "react";
import ContactWrapper, {
  Container,
  DesContainer,
  Footer,
  HeadWrapper,
  JpWrapper,
} from "./Contact.style";

export const Contact = () => {
  const [text, setText] = useState("Contact");
  const handleChange = () => {
    text === "コンタクト" ? setText("Contact") : setText("コンタクト");
  };
  return (
    <ContactWrapper id="contact">
      <Container>
        <JpWrapper text={text}>
          <text onPointerEnter={handleChange}>{text}</text>
        </JpWrapper>
        <>
          <HeadWrapper>
            <text>Get In Touch</text>
          </HeadWrapper>
          <DesContainer>
            <p>
              <text>
                Feel free to ping me on my socials like{" "}
                <span
                  onClick={() => {
                    window.open("https://github.com/Kuro0911");
                  }}
                >
                  Github
                </span>
                ,{" "}
                <span
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/dhananjai-sharma09/"
                    );
                  }}
                >
                  LinkedIn
                </span>{" "}
                or{" "}
                <span
                  onClick={() => {
                    console.log("discord");
                  }}
                >
                  Discord
                </span>{" "}
                at any time and ill try my best to get back to you ASAP
              </text>
            </p>
            <p>
              <text>
                You can also mail me at{" "}
                <span
                  onClick={() => {
                    window.location.href = "mailto:dhananjaisharma09@gmail.com";
                  }}
                >
                  dhananjaisharma09@gmail.com
                </span>
              </text>
            </p>
          </DesContainer>
        </>
      </Container>
      <Footer>
        <text>made by Dhananjai Sharma</text>
        <br />
        <text className="jp">さようなら</text>
      </Footer>
    </ContactWrapper>
  );
};
