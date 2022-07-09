import styled from "styled-components";

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 10%;
  width: 100%;
  text-align: center;
`;
export const GreetContainer = styled.div`
  text {
    font-size: 1.4vw;
    font-family: monospace;
    color: #64ffda;
  }
  .jp {
    font-size: 1vw;
  }
`;
export const NameContainer = styled.div`
  margin-bottom: ${(props) => (props.text === "ダナンジャイ" ? "-0.93%" : "0")};
  text {
    color: ${(props) =>
      props.text === "ダナンジャイ" ? "#64ffda" : "#ccd6f6"};
    font-size: ${(props) => (props.text === "ダナンジャイ" ? "6vw" : "7vw")};
    font-weight: 650;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  .lname {
    font-size: 7vw;
    color: #ccd6f6;
  }
`;

export const DesContainer = styled.div`
  text {
    color: #8892b0;
    font-size: 2vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  .jp {
    font-size: 1.6vw;
  }
`;
export default IntroWrapper;
