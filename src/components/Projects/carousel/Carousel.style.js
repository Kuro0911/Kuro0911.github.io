import styled from "styled-components";

const Wrapper = styled.div`
  .wrap {
    width: 70vw;
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
    width: 50%;
    margin-right: 3%;
  }
  .right {
    width: 50%;
  }
  .heading {
    text-align: left;
    text {
      font-size: xx-large;
      font-family: monospace !important;
    }
    color: #ccd6f6;
  }
  .heading:hover {
    color: #62fad6;
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
