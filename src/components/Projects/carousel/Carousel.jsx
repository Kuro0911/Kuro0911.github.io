import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Carousel.style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactPlayer from "react-player";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CircularProgress from "@mui/material/CircularProgress";

export const CarouselModal = () => {
  const [index, setIndex] = useState(0);
  const [shibaPlay, setShibaPlay] = useState(false);
  const [sortPlay, setSortPlay] = useState(false);
  const [weChatPlay, setWeChatPlay] = useState(false);
  const [netflixPlay, setNetflixPlay] = useState(false);
  const [loader, setloader] = useState({
    shiba: true,
    netflix: true,
    wechat: true,
    sort: true,
  });
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // console.log(loader);
  const NetflixVid = `https://gdurl.com/fgE5`;
  const ShibaVid = `https://gdurl.com/FBfR`;
  const SortinVid = `https://gdurl.com/qYct`;
  const WechatVid = `https://gdurl.com/QdRK`;
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          popper: {
            width: "100%",
          },
          tooltip: {
            fontSize: "15px",
            color: "#ccd6f6",
            backgroundColor: "#64ffda42",
            textAlign: "left",
            marginLeft: "15%",
          },
        },
      },
    },
  });
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
          <ThemeProvider theme={theme}>
            <Tooltip
              title={
                <React.Fragment>
                  {/* <span
                    style={{
                      color: "#64ffda",
                      display: "flex",
                      justifyContent: "end",
                      marginBottom: "-10%",
                    }}
                  >
                    <ArrowDropUpIcon fontSize="large" />
                  </span> */}
                  <div>
                    <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                    <br />
                    <span>{"Hover on the picture to play video"}</span>
                  </div>
                </React.Fragment>
              }
              arrow={true}
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            >
              <div className="container">
                <div className="left">
                  {loader.shiba ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setShibaPlay(true)}
                    onMouseLeave={() => setShibaPlay(false)}
                  >
                    <ReactPlayer
                      url={ShibaVid}
                      playing={shibaPlay}
                      loop
                      height={"90%"}
                      width={"100%"}
                      style={{ overflow: "hidden" }}
                      onReady={() => setloader({ ...loader, shiba: false })}
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
                      Shiba is a <code>CHATBOT</code> made to help new users to
                      get into crypto-currency by
                      <br />
                      <br />
                      <span>
                        <ArrowRightIcon />
                      </span>
                      Providing them various trading platforms to choose from{" "}
                      <br />
                      <span>
                        <ArrowRightIcon />
                      </span>
                      Implementing basic trading strategies to help the users{" "}
                      <br />
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
            </Tooltip>
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"Hover on the picture to play video"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            >
              <div className="container">
                <div className="left">
                  {loader.sort ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setSortPlay(true)}
                    onMouseLeave={() => setSortPlay(false)}
                  >
                    <ReactPlayer
                      url={SortinVid}
                      playing={sortPlay}
                      loop
                      style={{ overflow: "hidden" }}
                      height={"90%"}
                      width={"100%"}
                      onReady={() => setloader({ ...loader, sort: false })}
                    />
                  </span>
                </div>
                <div className="right">
                  <div className="heading">
                    <a href="https://relaxed-jelly-706d87.netlify.app/">
                      SortViz
                    </a>
                  </div>
                  <br />
                  <div className="about">
                    <p>
                      SortViz has 6 algorithms implemented for sorting namely{" "}
                      <br />
                      <br />
                      {sortAlgoNames.map((val) => {
                        return (
                          <div
                            style={{ dispay: "flex", fontFamily: "inherit" }}
                          >
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
            </Tooltip>
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"Hover on the picture to play video"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            >
              <div className="container">
                <div className="left">
                  {loader.netflix ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setNetflixPlay(true)}
                    onMouseLeave={() => setNetflixPlay(false)}
                  >
                    <ReactPlayer
                      url={NetflixVid}
                      playing={netflixPlay}
                      loop
                      style={{ overflow: "hidden" }}
                      height={"90%"}
                      width={"100%"}
                      onReady={() => setloader({ ...loader, netflix: false })}
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
                      A Netflix web clone which plays trailers for trending
                      movies and shows
                    </p>
                  </div>
                  <br />
                  <div className="tags">
                    <span>ReactJS</span>
                    <span>JavaScript</span>
                    <span>API</span>
                    <span>react-youtube</span>
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
            </Tooltip>
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"Hover on the picture to play video"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            >
              <div className="container">
                <div className="left">
                  {loader.wechat ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setWeChatPlay(true)}
                    onMouseLeave={() => setWeChatPlay(false)}
                  >
                    <ReactPlayer
                      url={WechatVid}
                      playing={weChatPlay}
                      loop
                      style={{ overflow: "hidden" }}
                      height={"90%"}
                      width={"100%"}
                      onReady={() => setloader({ ...loader, wechat: false })}
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
                      Wechat is one of the projects which I am the most proud of
                      I learned a lot from this starting from adding databases
                      using
                      <code> firebase</code> adding google auth using firebase
                      using <code>react reducers</code>,{" "}
                      <code>react routers</code> it was a great project and I
                      enjoyed the most while building it
                    </p>
                  </div>
                  <br />
                  <div className="tags">
                    <span>ReactJs</span>
                    <span>Firebase</span>
                    <span>NodeJs</span>
                    <span>MongoDb</span>
                  </div>
                  <br />
                  <div className="gotoContainer">
                    <a
                      className="goto"
                      href="https://github.com/Kuro0911/WeChat"
                    >
                      <GitHubIcon className="icon" />
                    </a>
                    <a className="goto" href="https://wechat-bykuro.web.app/">
                      <LaunchIcon className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Tooltip>
          </ThemeProvider>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
