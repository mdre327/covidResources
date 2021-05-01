import React from "react";
import PropTypes from "prop-types";
const TitleText = ({ cName, label, id, ...props }) => {
  return (
    <span className={cName} id={id}>
      {label}
    </span>
  );
};
TitleText.prototype = {
  cName: PropTypes.string,
  label: PropTypes.string,
};
TitleText.defaultProps = {
  cName: " ",
  label: " ",
};
export default TitleText;
