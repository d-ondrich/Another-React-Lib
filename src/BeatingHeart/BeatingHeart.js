import React from "react";
import PropTypes from "prop-types";
import "./BeatingHeart.css";
import "@fortawesome/fontawesome-free/css/all.css";

const BeatingHeart = props => {
  let { size } = props;

  return (
    <div className="beating-heart-component">
      <div className="beating-heart-container">
        <i className={`fas fa-heart ${size}`} id="beating-heart"></i>
      </div>
    </div>
  );
};

BeatingHeart.defaultProps = {
  size: "md"
};

BeatingHeart.propTypes = {
  size: PropTypes.string
};

export default BeatingHeart;
