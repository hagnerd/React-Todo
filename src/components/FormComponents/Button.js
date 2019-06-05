import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export default function Button({
  type = "button",
  className = "btn-default",
  children,
  handleClick,
  disabled = false
} = {}) {
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};
