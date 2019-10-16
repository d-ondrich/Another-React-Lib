import React from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";

const ImageGallery = props => {
  return (
    <div className="image-gallery">
      {props.images.map(image => (
        <ImageGalleryImage key={image.alt} {...image} size={props.size} />
      ))}
    </div>
  );
};

const ImageGalleryImage = props => {
  return (
    <div className={`gallery-image gallery-image-${props.size}`}>
      <img className="image" src={props.source} alt={props.alt} />
      {props.content && (
        <div className="content-overlay">
          <p className="content">{props.content}</p>
        </div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.string.isRequired
};

ImageGalleryImage.propTypes = {
  source: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default ImageGallery;
