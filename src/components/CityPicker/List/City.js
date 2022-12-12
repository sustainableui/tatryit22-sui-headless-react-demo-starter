import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const City = (props) => (
  <Link to="#" style={props.hidden ? { visibility: "hidden" } : {}}>
    <div
      onMouseEnter={() => props.onMouse(true, props.index)}
      onMouseLeave={() => props.onMouse(false, props.index)}
      className={`${
        props.hovered ? "shadow-2xl-sheer" : "shadow-xl-sheer"
      } transition-colors duration-500 ease-in-out inline-block sm:block xs:block w-full max-w-full p-1 mt-10 sm:mt-4 xs:mt-4 font-futura-medium text-blue text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl text-center`}
      style={
        props.hovered
          ? {
              backgroundImage: "linear-gradient(to right, rgba(44,235,173, 1), rgba(46,102,255, 1))"
            }
          : {}
      }
    >
      <div
        className={`transition-colors duration-500 ease-in-out bg-white hover:text-green pl-10 pr-10 pt-8 pb-8 sm:pl-5 sm:pr-5 sm:pt-3 sm:pb-3 xs:pl-5 xs:pr-5 xs:pt-2 xs:pb-2`}
      >
        {props.text}
      </div>
    </div>
  </Link>
);

City.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  hovered: PropTypes.bool.isRequired,
  onMouse: PropTypes.func.isRequired
};

export default City;
