import PropTypes from "prop-types";
import React from "react";

const CityPickerMapLoader = (props) => (
  <text
    className="font-rustico-regular fill-blue text-3xl"
    textAnchor="middle"
    x={props.projection([19.4724, 48.6832])[0] - 22}
    y={props.projection([19.4724, 48.6832])[1] + 50}
  >
    MaPa sa načítava..
  </text>
);

CityPickerMapLoader.propTypes = {
  projection: PropTypes.func.isRequired
};

export default CityPickerMapLoader;
