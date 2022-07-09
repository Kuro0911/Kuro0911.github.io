import styled from "styled-components";

export const SocialWrapper = styled.div`
  width: 7%;
  position: fixed;
  z-index: 3;
  bottom: 0;
  height: 40%;
  background-color: #09192f;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    height: 130px;
    width: 2px;
    background-color: #ccd6f6;
    margin-top: 25%;
  }
  .icon {
    margin-top: 25%;
    color: #ccd6f6;
    font-size: 25px;
    transition: 0.1s ease-in;
  }
  .icon:hover {
    cursor: pointer;
    color: #64ffda;
    font-size: 28px;
  }
`;
