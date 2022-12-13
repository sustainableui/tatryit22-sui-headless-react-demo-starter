import { Link } from 'react-router-dom';
import { ReactComponent as MapLocationIconSVG } from '../../../../assets/icons/map_location.svg';
import PropTypes from 'prop-types';
import React from 'react';

const CityPickerMapLocation = (props) => {
  return (
    <Link
      to="#"
      onMouseEnter={() => props.onMouse(true, props.index)}
      onMouseLeave={() => props.onMouse(false, props.index)}>
      <text
        textAnchor="middle"
        className={`font-rustico-regular text-xxs ${props.hovered ? `fill-gray` : 'fill-white'}`}
        x={props.projection(props.data.coordinates)[0] + 13}
        y={props.projection(props.data.coordinates)[1] + 30}>
        {props.data.name}
      </text>
      <MapLocationIconSVG
        height={23}
        x={props.projection(props.data.coordinates)[0] - 7}
        y={props.projection(props.data.coordinates)[1]}
      />
    </Link>
  );
};

CityPickerMapLocation.propTypes = {
  projection: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  hovered: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onMouse: PropTypes.func.isRequired
};

export default CityPickerMapLocation;
