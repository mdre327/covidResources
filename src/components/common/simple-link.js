import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SimpleLink = ({ link, label, cName, ...props }) => {
  return (
    <Link to={link} className={cName}>
      {label}
    </Link>
  );
};
SimpleLink.defaultProps = {
  link: " ",
  target: " ",
};

SimpleLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  cName: PropTypes.string,
  target: PropTypes.string,
};
export default SimpleLink;
