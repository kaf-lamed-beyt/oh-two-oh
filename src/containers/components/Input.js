import React from "react";
import propTypes from "prop-types";

export const Search = ({
  value,
  defaultText,
  className,
  onChange,
  ...props
}) => {
  return (
    <input
      type="text"
      className={className}
      value={value}
      placeholder={defaultText}
      onChange={onChange}
      {...props}
    />
  );
};

Search.propTypes = {
  value: propTypes.string.isRequired,
  defaultText: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
