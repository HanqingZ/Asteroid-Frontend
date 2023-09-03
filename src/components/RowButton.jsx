import React from "react";
import PropTypes from 'prop-types';
import "./RowButton.scss"

const RowButton = ({name, onClick, style, className, children}) => {
  return (
    <button className={className} onClick={onClick} style={style} >
      {children}
      {name}
    </button>
  )
}

RowButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default RowButton
