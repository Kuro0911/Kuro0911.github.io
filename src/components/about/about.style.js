import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 3%;
  width: 60%;
  text-align: center;
`;
export const TextWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  width: 35%;
  .mui-image-wrapper {
    .css-jlmoib {
      border-radius: 100%;
    }
  }
`;
export const TextContainer = styled.div`
  width: 65%;
  color: #ccd6f6;
  text-align: left;
  font-size: medium;
  code {
    color: #64ffda;
  }
`;

export const JpWrapper = styled.div`
  margin-bottom: ${(props) => (props.text === "コンタクト" ? "-1.50%" : "0")};
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
`;
export default AboutWrapper;
