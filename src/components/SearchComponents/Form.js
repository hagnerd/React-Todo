import React from "react";
import PropTypes from "prop-types";

import Input from "../FormComponents/Input";
import Button from "../FormComponents/Button";

import "./Form.css";

function preventFormDefault(event) {
  event.preventDefault();
}

export default function Form({ searchValue, handleChange, handleClear }) {
  return (
    <form className="search-form card shadow" onSubmit={preventFormDefault}>
      <div className="flex flex-col w-70 search-input--group">
        <label className="label" htmlFor="search-input">
          Search Todos:
        </label>
        <Input
          className="search-input"
          id="search-input"
          type="text"
          name="search"
          value={searchValue}
          handleChange={handleChange}
          placeholder="search your todos"
        />
      </div>
      <Button
        className="btn-default align-self-end ml-auto search-btn"
        type="rest"
        handleClick={handleClear}
      >
        Clear Search
      </Button>
    </form>
  );
}

Form.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired
};
