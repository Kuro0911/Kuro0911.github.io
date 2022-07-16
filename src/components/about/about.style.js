import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 2%;
  width: 50%;
  text-align: center;
`;
export const ImageContainer = styled.div`
  .mui-image-wrapper {
    .css-jlmoib {
      border-radius: 100%;
    }
  }
`;
export const TextWrapper = styled.div``;
export const JpWrapper = styled.div`
  margin-bottom: ${(props) => (props.text === "コンタクト" ? "-1.50%" : "0")};
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
`;
export default AboutWrapper;
