import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import "./Carousel.css";

const Carousel = ({ images = [] }) => {
  const [selectedSlide, setCurrentSlide] = useState(0);

  const displaySlide = selectedSlide => {
    if (selectedSlide >= 0 && selectedSlide < images.length) {
      setCurrentSlide(selectedSlide);
    }
  };
  return (
    <Fragment>
      <div className="slideshow-container">
        {images.map((image, index) => {
          return (
            <div
              className={
                `slide fade ` + (selectedSlide === index ? "selected" : "")
              }
              key={index}
            >
              <div className="numbertext">
                {index + 1} / {images.length}
              </div>
              <img src={image.img} className="carousel-img" />
              <div className="text">{image.captionText}</div>
            </div>
          );
        })}

        {selectedSlide !== 0 && (
          <a className="prev" onClick={() => displaySlide(selectedSlide - 1)}>
            &#10094;
          </a>
        )}

        {selectedSlide !== images.length - 1 && (
          <a className="next" onClick={() => displaySlide(selectedSlide + 1)}>
            &#10095;
          </a>
        )}
      </div>
      <br />

      <div className="text-center">
        {images.map((image, index) => {
          return (
            <span
              className={`dot ` + (index === selectedSlide ? "active" : "")}
              onClick={() => setCurrentSlide(index)}
            ></span>
          );
        })}
      </div>
    </Fragment>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};
export default Carousel;
