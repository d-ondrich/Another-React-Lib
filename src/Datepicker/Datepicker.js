import React from "react";

import "./Datepicker.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Datepicker = ({ label, labelPosition="left" }) => {
  return (
    <div className={`datepicker-component datepicker-component-${labelPosition}`}>
      <label className="datepicker-label" htmlFor="datepicker">{label}</label>
      <input type="date" id="datepicker" />
    </div>
  );
};

export default Datepicker;
