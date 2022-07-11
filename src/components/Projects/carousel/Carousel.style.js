import styled from "styled-components";

const Wrapper = styled.div`
  .wrap {
    width: 95vw;
    height: 60vh;
    .carousel-inner {
      min-height: 60vh;
      .carousel-item {
        min-height: 60vh;
      }
    }
  }
  .container {
    display: flex;
  }
  .left {
    width: 60%;
    margin-left: 10%;
  }
  .right {
    width: 40%;
    margin-right: 5%;
  }
  .heading {
    a {
      text-decoration: none;
      color: inherit;
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
    }
    text-align: left;
    color: #64ffda;
  }
  .about {
    text-align: left;
    p {
      font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
        -apple-system, system-ui, sans-serif;
      font-size: medium;
    }
    color: #8892b0;
  }
  .tags {
    text-align: left;
    span {
      font-size: 14px;
      font-family: monospace !important;
      margin-right: 1em;
    }
    color: #ccd6f6;
  }
  .gotoContainer {
    text-align: left;
  }
  .goto {
    margin-right: 1em;
    .icon {
      color: #ccd6f6;
      font-size: 25px;
      transition: 0.1s ease-in;
    }
    .icon:hover {
      cursor: pointer;
      color: #64ffda;
    }
  }
`;

export default Wrapper;
