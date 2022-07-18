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
  width: fit-content;
  .mui-image-wrapper {
    .css-jlmoib {
      border-radius: 100%;
    }
  }
  .hover-effect {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    transition: 0.5s;
    margin-left: 20%;
    margin-top: 5%;
  }
  .hover-effect:hover {
    box-shadow: 0 0 16px var(--clr);
  }
`;
export const TagContainer = styled.div`
  text-align: right;
  color: #ccd6f6;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: end;
  h4 {
    color: ${(props) => (props.tag === "黒." ? "#64ffda" : "#ccd6f6")};
  }
  margin-top: 5%;
  p {
    color: #8892b0;
    width: 81%;
  }
`;
export const TextContainer = styled.div`
  width: 130%;
  color: #ccd6f6;
  text-align: left;
  font-size: large;
  code {
    color: #64ffda;
  }
  border-right: solid;
  padding: 10px;
  border-color: #64ffda;
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
