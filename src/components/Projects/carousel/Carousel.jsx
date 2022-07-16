import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Carousel.style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactPlayer from "react-player";
import ShibaVid from "./videos/ShibaVid.mp4";
import SortinVid from "./videos/SortinVid.mp4";
import WechatVid from "./videos/WechatVid.mp4";
import NetflixVid from "./videos/NetflixVid.mp4";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const CarouselModal = () => {
  const [index, setIndex] = useState(0);
  const [shibaPlay, setShibaPlay] = useState(false);
  const [sortPlay, setSortPlay] = useState(false);
  const [weChatPlay, setWeChatPlay] = useState(false);
  const [netflixPlay, setNetflixPlay] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const sortAlgoNames = [
    "Heap Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Selection Sort",
  ];

  return (
    <Wrapper>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="wrap"
      >
        <Carousel.Item>
          <div className="container">
            <div className="left">
              <span
                onMouseEnter={() => setShibaPlay(true)}
                onMouseLeave={() => setShibaPlay(false)}
              >
                <ReactPlayer
                  url={ShibaVid}
                  playing={shibaPlay}
                  loop
                  style={{ overflow: "hidden" }}
                />
              </span>
            </div>
            <div className="right">
              <div className="heading">
                <a href="https://kuro0911.github.io/Shiba---A-chat-Bot/">
                  Shiba The crypto bot
                </a>
              </div>
              <br />
              <div className="about">
                <p>
                  Shiba is a <code>CHATBOT</code> made to help new users to get
                  into crypto-currency by
                  <br />
                  <br />
                  <span>
                    <ArrowRightIcon />
                  </span>
                  Providing them various trading platforms to choose from{" "}
                  <span>
                    <ArrowRightIcon />
                  </span>
                  Implementing basic trading strategies to help the users{" "}
                  <span>
                    <ArrowRightIcon />
                  </span>
                  Providing the real time price of various coins using API
                  <br />
                </p>
              </div>
              <br />
              <div className="tags">
                <span>CryptoCurrency</span>
                <span>JavaSript</span>
                <span>ReactJS</span>
                <span>ChatBot</span>
              </div>
              <br />
              <div className="gotoContainer">
                <a
                  className="goto"
                  href="https://github.com/Kuro0911/Shiba---A-chat-Bot"
                >
                  <GitHubIcon className="icon" />
                </a>
                <a
                  className="goto"
                  href="https://kuro0911.github.io/Shiba---A-chat-Bot/"
                >
                  <LaunchIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="left">
              <span
                onMouseEnter={() => setSortPlay(true)}
                onMouseLeave={() => setSortPlay(false)}
              >
                <ReactPlayer
                  url={SortinVid}
                  playing={sortPlay}
                  loop
                  style={{ overflow: "hidden" }}
                />
              </span>
            </div>
            <div className="right">
              <div className="heading">
                <a href="https://relaxed-jelly-706d87.netlify.app/">SortViz</a>
              </div>
              <br />
              <div className="about">
                <p>
                  SortViz has 6 algorithms implemented for sorting namely <br />
                  <br />
                  {sortAlgoNames.map((val) => {
                    return (
                      <div style={{ dispay: "flex", fontFamily: "inherit" }}>
                        <span>
                          <ArrowRightIcon />
                        </span>
                        {val}
                      </div>
                    );
                  })}
                </p>
              </div>
              <div className="tags">
                <span>Sorting Algorithms</span>
                <span>JavaSript</span>
                <span>NextJS</span>
              </div>
              <br />
              <div className="gotoContainer">
                <a
                  className="goto"
                  href="https://github.com/Kuro0911/Sorting-Visualizer"
                >
                  <GitHubIcon className="icon" />
                </a>
                <a
                  className="goto"
                  href="https://relaxed-jelly-706d87.netlify.app/"
                >
                  <LaunchIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="left">
              <span
                onMouseEnter={() => setNetflixPlay(true)}
                onMouseLeave={() => setNetflixPlay(false)}
              >
                <ReactPlayer
                  url={NetflixVid}
                  playing={netflixPlay}
                  loop
                  style={{ overflow: "hidden" }}
                />
              </span>
            </div>
            <div className="right">
              <div className="heading">
                <a href="https://kuro0911.github.io/netflix-clone/">
                  Netflix Clone
                </a>
              </div>
              <br />
              <div className="about">
                <p>
                  Do we make money or does money make us? Chezwich. I have never
                  known a Jack that was in good enough shape to name
                  bodybuilding after him. Do we make money or does money make
                  us? Chezwich. This is a true fact: I never had a fear of
                  heights until I fell off a roof. This is a true fact: I never
                  had a fear of heights until I fell off a roof.{" "}
                </p>
              </div>
              <br />
              <div className="tags">
                <span>CryptoCurrency</span>
                <span>JavaSript</span>
                <span>ReactJS</span>
                <span>ChatBot</span>
              </div>
              <br />
              <div className="gotoContainer">
                <a
                  className="goto"
                  href="https://github.com/Kuro0911/netflix-clone"
                >
                  <GitHubIcon className="icon" />
                </a>
                <a
                  className="goto"
                  href="https://kuro0911.github.io/netflix-clone/"
                >
                  <LaunchIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="left">
              <span
                onMouseEnter={() => setWeChatPlay(true)}
                onMouseLeave={() => setWeChatPlay(false)}
              >
                <ReactPlayer
                  url={WechatVid}
                  playing={weChatPlay}
                  loop
                  style={{ overflow: "hidden" }}
                />
              </span>
            </div>
            <div className="right">
              <div className="heading">
                <a href="https://wechat-bykuro.web.app/">We Chat</a>
              </div>
              <br />
              <div className="about">
                <p>
                  Do we make money or does money make us? Chezwich. I have never
                  known a Jack that was in good enough shape to name
                  bodybuilding after him. Do we make money or does money make
                  us? Chezwich. This is a true fact: I never had a fear of
                  heights until I fell off a roof. This is a true fact: I never
                  had a fear of heights until I fell off a roof.{" "}
                </p>
              </div>
              <br />
              <div className="tags">
                <span>CryptoCurrency</span>
                <span>JavaSript</span>
                <span>ReactJS</span>
                <span>ChatBot</span>
              </div>
              <br />
              <div className="gotoContainer">
                <a className="goto" href="https://github.com/Kuro0911/WeChat">
                  <GitHubIcon className="icon" />
                </a>
                <a className="goto" href="https://wechat-bykuro.web.app/">
                  <LaunchIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
