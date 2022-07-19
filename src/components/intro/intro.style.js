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
  animation: fadeInDown 1.5s;
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
  animation: fadeIn 2s;
  text {
    cursor: pointer;
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
    margin-left: ${(props) => (props.text === "ダナンジャイ" ? "-2.45%" : "0")};
  }
`;

export const DesContainer = styled.div`
  animation: fadeInUp 1.5s;
  text {
    color: #8892b0;
    font-size: 2vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  .jp {
    font-size: 1.6vw;
  }
  margin-top: 2%;
`;
export default IntroWrapper;
