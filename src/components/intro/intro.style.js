import styled from "styled-components";

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09192f;
`;
export const Container = styled.div``;
export const NameContainer = styled.div`
  text {
    color: #ccd6f6;
    font-size: 8vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
`;
export const GreetContainer = styled.div`
  text {
    font-size: 1.5vw;
    font-family: monospace;
    color: #64ffda;
  }
`;
export default IntroWrapper;
