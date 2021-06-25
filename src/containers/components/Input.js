import React from "react";
import propTypes from "prop-types";

export const SearchBox = ({
  value,
  defaultText,
  className,
  onChange,
  ...props
}) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className={`form-control ${className}`}
        value={value}
        placeholder={defaultText}
        onChange={onChange}
        {...props}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 11.3333L14.6667 14.6667L11.3333 11.3333ZM13 7.16666C13 10.3883 10.3883 13 7.16666 13C3.945 13 1.33333 10.3883 1.33333 7.16666C1.33333 3.945 3.945 1.33333 7.16666 1.33333C10.3883 1.33333 13 3.945 13 7.16666Z"
          stroke="#2E4457"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

SearchBox.propTypes = {
  value: propTypes.string.isRequired,
  defaultText: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
