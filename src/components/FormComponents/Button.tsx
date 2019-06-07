import React, { ReactHTMLElement } from "react";
import PropTypes from "prop-types";

import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
}

export default function Button({
  type = "button",
  className = "btn-default",
  children,
  handleClick,
  ...btnProps
}: // disabled = false
ButtonProps) {
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      {...btnProps}
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
