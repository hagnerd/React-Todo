import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

// This is where I wish I was using TypeScript so I could restrict
// the inputProps to being only valid input attributes
export default function TextInput({
  className,
  value,
  handleChange,
  ...inputProps
}) {
  return (
    <input
      value={value}
      className={`input ${className}`}
      onChange={handleChange}
      {...inputProps}
    />
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
