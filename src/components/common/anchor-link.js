import React from "react";
import PropTypes from "prop-types";
const AnchorLink = ({ link, target, label, cName, ...props }) => {
  return (
    <a href={link} target={target} className={cName}>
      {label}
    </a>
  );
};
AnchorLink.defaultProps = {
  link:' ',
  target:' ',
  label:' ',
  cName:' '
};

AnchorLink.propTypes = {
  link: PropTypes.string,
  target:PropTypes.string,
  label:PropTypes.string,
  cName:PropTypes.string,
};
export default AnchorLink;
