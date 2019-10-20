import React from "react";
import PropTypes from "prop-types";

import "./Datepicker.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Datepicker = props => {
  const { label, labelPosition } = props;
  return (
    <div className={`datepicker-component datepicker-component-${labelPosition}`}>
      <label className="datepicker-label" htmlFor="datepicker">{label}</label>
      <input type="date" id="datepicker" />
    </div>
  );
};

Datepicker.defaultProps = {
  label: "",
  labelPosition: "left"
};

Datepicker.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.string
};

export default Datepicker;
