import styled from "styled-components";

const InternWrapper = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
    margin-bottom: 1em;
  }
  .btn {
    margin-left: 2em;
    .menuTextbtn {
      font-size: 15px;
      text-decoration: none;
      font-family: monospace;
      color: #64ffda;
    }
  }
  .para-wrap {
    text-align: left;
    .list {
      li {
        display: flex;
        align-items: center;
        margin-left: 5%;
        margin-top: 1%;
        span {
          color: #64ffda;
          font-size: 10px;
        }
      }
    }
    h3 {
      margin-left: 1em;
      .date {
        font-size: small;
        color: #64ffda;
        margin-top: 0.5%;
      }
      a {
        text-decoration: none;
        color: #64ffda;
        font-size: xx-large;
        font-family: monospace !important;
        background: linear-gradient(
            to right,
            rgb(100 200 200 / 0%),
            rgb(100 200 200 / 0%)
          ),
          linear-gradient(
            to right,
            rgba(100, 200, 200, 1),
            rgba(100, 200, 200, 1)
          );
        background-size: 100% 3px, 0 3px;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
        cursor: pointer;
      }
      a:hover {
        background-size: 0 3px, 100% 3px;
        color: #b3bedd;
      }
    }
  }
`;

export const ProgrammingWrap = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
    .code-seg {
      color: #64ffda;
    }
  }
  .logo-container {
    margin-left: 1em;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo-top {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 10%;
    }
    .logo-bottom {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
export const WebWrap = styled.div`
  text-align: left;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
  }
`;
export const CourseWrap = styled.div`
  text-align: left;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
  }
`;
export const OtherWrap = styled.div`
  text-align: left;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
  }
`;
export default InternWrapper;
