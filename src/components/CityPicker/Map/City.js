import { Link } from "react-router-dom";
import { ReactComponent as MapLocationIconSVG } from "../../../assets/icons/map_location.svg";
import PropTypes from "prop-types";
import React from "react";

const City = (props) => {
  return (
    <Link
      to="#"
      onMouseEnter={() => props.onMouse(true, props.index)}
      onMouseLeave={() => props.onMouse(false, props.index)}
    >
      <text
        textAnchor="middle"
        className={`font-rustico-regular text-xxs ${props.hovered ? `fill-gray` : "fill-white"}`}
        x={props.projection(props.data.COORDINATES)[0] + 13}
        y={props.projection(props.data.COORDINATES)[1] + 30}
      >
        {props.data.NAME}
      </text>
      <MapLocationIconSVG
        height={23}
        x={props.projection(props.data.COORDINATES)[0] - 7}
        y={props.projection(props.data.COORDINATES)[1]}
      />
    </Link>
  );
};

City.propTypes = {
  projection: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  hovered: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onMouse: PropTypes.func.isRequired
};

export default City;
