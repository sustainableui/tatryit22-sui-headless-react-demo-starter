import PropTypes from "prop-types";
import React from "react";

const Loader = (props) => (
  <text
    className="font-rustico-regular fill-blue text-3xl"
    textAnchor="middle"
    x={props.projection([19.4724, 48.6832])[0] - 22}
    y={props.projection([19.4724, 48.6832])[1] + 50}
  >
    MaPa sa načítava..
  </text>
);

Loader.propTypes = {
  projection: PropTypes.func.isRequired
};

export default Loader;
