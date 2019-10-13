import React from "react";
import PropTypes from "prop-types";
import "./Stepper.css";

const Stepper = props => {
  let { steps, currentStep } = props;

  const items = Array.apply(null, Array(steps)).map((_, i) => {
    return (
      <div className="step-container" key={i.toString()}  >
        <span className={i <= currentStep ? "step-number complete" :"step-number"}>{i+1}</span>
        {i+1 === steps ? '' : <div className={i+1 <= currentStep ? "separator complete" : "separator"}></div>}
      </div>
      )
  });

  return (
    <div className="stepper-container">
      {items}
    </div>
  )
};

Stepper.defaultProps = {
  steps: 3,
  currentStep: 0,
};

Stepper.propTypes = {
  steps: PropTypes.oneOf(1, 2, 3, 4, 5),
  currentStep: PropTypes.number,
};

export default Stepper;
