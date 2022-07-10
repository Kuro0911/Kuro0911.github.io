import React, { useState } from "react";
import WorkWrapper, { Container, JpWrapper } from "./work.style";

export const Work = () => {
  const [text1, setText1] = useState("Experience");
  const [text2, setText2] = useState("Skills");
  const handleChange1 = () => {
    text1 === "エクスペリエンス"
      ? setText1("Experience")
      : setText1("エクスペリエンス");
  };
  const handleChange2 = () => {
    text2 === "スキル" ? setText2("Skills") : setText2("スキル");
  };
  return (
    <WorkWrapper id="work">
      <Container>
        <JpWrapper text={text1}>
          <text onPointerEnter={handleChange1}>{text1}</text>
          <text> / </text>
          <text onPointerEnter={handleChange2}>{text2}</text>
        </JpWrapper>
      </Container>
    </WorkWrapper>
  );
};
