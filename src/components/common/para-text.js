import React from "react";
import PropTypes from "prop-types";
const ParaText = ({ label, cName, ...props }) => {
  return <p className={cName}>{label}</p>;
};
ParaText.prototype={
  cName:PropTypes.string,
  label:PropTypes.string,
}
ParaText.defaultProps ={
  cName:' '

}
export default ParaText;
