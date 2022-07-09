import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 10%;
  width: 50%;
  text-align: center;
`;
export const JpWrapper = styled.div`
  margin-bottom: ${(props) => (props.text === "コンタクト" ? "-1.50%" : "0")};
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
`;
export default ProjectWrapper;
