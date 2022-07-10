import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Carousel.style";

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
          <div className="heading">
            <text>help</text>
            <br />
            <text>help</text>
            <br />
            <text>help</text>
            <br />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
