import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Carousel.style";
import Shiba from "./images/shiba.png";
import Image from "mui-image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export const CarouselModal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
              <Image src={Shiba} width={500} height={400} duration={0} />
            </div>
            <div className="right">
              <div className="heading">
                <text>Shiba The crypto bot</text>
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
                <a className="goto" href="https://github.com/Kuro0911">
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
          <div className="heading">
            <text>help</text>
            <br />
            <text>help</text>
            <br />
            <text>help</text>
            <br />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="heading">
            <text>help</text>
            <br />
            <text>help</text>
            <br />
            <text>help</text>
            <br />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
