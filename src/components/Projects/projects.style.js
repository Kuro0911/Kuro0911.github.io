import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  background-color: #09192f;
  margin-top: 2%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;
export const JpWrapper = styled.div`
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
  margin-bottom: 5%;

  @media screen and (max-width: 900px) {
    text {
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 4vw;
    }
  }
`;

export default ProjectWrapper;
