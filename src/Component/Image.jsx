// import React from 'react'
import "./Image.css"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Image = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.src} alt={props.alt} />
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link to="/Travel" className={props.btnClass}>{props.buttonText}</Link>
      </div>
    </div>
  )
}
Image.propTypes = {
  cName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};
export default Image;
