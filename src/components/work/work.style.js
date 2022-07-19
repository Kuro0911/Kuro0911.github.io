import styled from "styled-components";

const WorkWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 2%;
  width: 70%;
  text-align: center;
`;
export const JpWrapper = styled.div`
  display: flex;
  justify-content: center;
  .exp {
    width: 250px;
  }
  .skill {
    width: 200px;
  }
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
  code {
    color: #64ffda;
    font-size: 1.7vw;
  }
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
export default WorkWrapper;
