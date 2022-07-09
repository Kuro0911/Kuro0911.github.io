import React, { useState } from "react";
import ProjectWrapper, { Container, JpWrapper } from "./projects.style";

export const Projects = () => {
  const [text, setText] = useState("Projects");
  const handleChange = () => {
    text === "プロジェクト" ? setText("Projects") : setText("プロジェクト");
  };
  return (
    <ProjectWrapper id="projects">
      <Container>
        <JpWrapper onPointerEnter={handleChange} text={text}>
          <text>{text}</text>
        </JpWrapper>
      </Container>
    </ProjectWrapper>
  );
};
