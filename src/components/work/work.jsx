import React, { useState } from "react";
import WorkWrapper, { Container, JpWrapper } from "./work.style";

export const Work = () => {
  const [text, setText] = useState("Experience");
  const handleChange = () => {
    text === "エクスペリエンス"
      ? setText("Experience")
      : setText("エクスペリエンス");
  };
  return (
    <WorkWrapper id="work">
      <Container>
        <JpWrapper text={text}>
          <text onPointerEnter={handleChange}>{text}</text>
        </JpWrapper>
      </Container>
    </WorkWrapper>
  );
};
