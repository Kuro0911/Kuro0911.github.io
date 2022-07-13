import styled from "styled-components";

const WorkModalWrapper = styled.div`
  margin-top: 5%;
  background-color: white;
  width: 70vw;
  height: 60vh;
  .wrap {
    display: flex;
  }
  .left {
    border-right-style: solid;
    border-color: #64ffda;
    background-color: #09192f;
    width: 25%;
    height: 60vh;
    .button-wrapper {
      display: flex;
      flex-direction: column;
      .button {
        span {
          text-decoration: none;
          color: inherit;
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
        span:hover {
          background-size: 0 3px, 100% 3px;
        }
        text-align: left;
        margin-top: 10%;
        background-color: transparent;
        border: none;
        color: #64ffda;
        font-size: 1.7vw;
      }
    }
  }
  .right {
    width: 75%;
    height: 60vh;
    background-color: pink;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default WorkModalWrapper;
