import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 6%;
  width: 50%;
  text-align: center;
`;
export const JpWrapper = styled.div`
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
`;
export const HeadWrapper = styled.div`
  text {
    width: 80px;
    color: #ccd6f6;
    font-size: 4.8vw;
    font-weight: 600;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
`;
export const DesContainer = styled.div`
  margin-top: 5%;
  text {
    color: #8892b0;
    font-size: 1.5vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  span {
    cursor: pointer;
    color: #64ffda;
    font-size: 1.5w;
    text-decoration: underline;
  }
`;
export const Footer = styled.div`
  margin-top: 35%;
  text {
    font-size: 1vw;
    font-family: monospace;
    color: #8892b0;
  }
  .jp {
    color: #64ffda;
    font-size: 1vw;
  }
`;
export default ContactWrapper;
