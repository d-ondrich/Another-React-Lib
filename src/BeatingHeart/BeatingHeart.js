import React from "react";

import "./BeatingHeart.css";
import "@fortawesome/fontawesome-free/css/all.css";

class BeatingHeart extends React.Component {
  setHeartSize(size) {
    const heart = document.getElementById("beating-heart")
    heart.style.fontSize = size + 'rem'
  }

  render() {
    return (
      <div className="beating-heart-component">
        <div className="select-size">
          <div className="size" onClick={() => this.setHeartSize(1)}>Small</div>
          <div className="size" onClick={() => this.setHeartSize(2)}>Medium</div>
          <div className="size" onClick={() => this.setHeartSize(3)}>Large</div>
        </div>
        <i className="fas fa-heart" id="beating-heart"></i>
      </div>
    )
  }
}

export default BeatingHeart;
