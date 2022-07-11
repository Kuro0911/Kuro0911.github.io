import styled from "styled-components";

const WorkModalWrapper = styled.div`
  margin-top: 5%;
  background-color: white;
  width: 50vw;
  height: 60vh;
  .wrap {
    display: flex;
  }
  .left {
    background-color: #09192f;
    width: 35%;
    height: 60vh;
    .button-wrapper {
      display: flex;
      flex-direction: column;
      .button {
        text-align: left;
        margin-top: 10%;
        background-color: transparent;
        border: none;
        color: #64ffda;
        font-size: 1.7vw;
      }
      button:hover {
        color: #8892b0;
      }
    }
  }
  .right {
    width: 65%;
    height: 60vh;
    background-color: pink;
  }
`;
export default WorkModalWrapper;
