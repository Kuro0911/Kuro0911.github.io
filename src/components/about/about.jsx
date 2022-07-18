import React, { useState } from "react";
import AboutWrapper, {
  Container,
  ImageContainer,
  JpWrapper,
  TagContainer,
  TextContainer,
  TextWrapper,
} from "./about.style";
import profile from "./utils/profile.jpg";
import Image from "mui-image";

export const About = () => {
  const [text, setText] = useState("About");
  const name = "Dhananjai Sharma";
  // const [name, setName] = useState("Dhananjai Sharma");
  const [tag, setTag] = useState("kuro.");

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
              out why is a div not centered AAAAHHH!!!
              <p />
              <p>
                and yes I do code alot. I always wanted to create things and
                looking at things on the web just made my 8 year old brain think
                that how is this working then one fine day i stumbled across{" "}
                <code>HTML & CSS</code> and when i got the tools all I had to do
                was start and so, I did. Also <code>Algorithms</code> do
                interest me alot which got me into problem solving using{" "}
                <code>C++</code>
              </p>
              <p>
                So yes it has been a fun ride and i expect it to get even better
                where i can learn more and explore
              </p>
              <br />
              <span>どうぞよろしく</span>
            </p>
          </TextContainer>
          <ImageContainer>
            <div className="hover-effect" style={{ "--clr": "#64ffda" }}>
              <Image src={profile} width={250} height={250} />
            </div>
            <TagContainer tag={tag}>
              <h3>{name}</h3>
              <h4 onMouseEnter={() => setTag(tag === "黒." ? "kuro." : "黒.")}>
                {tag}
              </h4>
              <p>
                Competitive Coder || C++ || Javascript || React.js || Next.js ||
                Web Developer || Kali Linux || SRM University
              </p>
            </TagContainer>
          </ImageContainer>
        </TextWrapper>
      </Container>
    </AboutWrapper>
  );
};
