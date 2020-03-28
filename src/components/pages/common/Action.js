import Button from '../../common/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Action = props =>
  <div className="text-center pt-14 sm:pt-8 xs:pt-8">
    <span className="font-futura-medium text-md text-gray-hover">
      {props.descriptionText}
      {props.disabled && <span className="block">(momentálne nie je k dispozícii)</span>}
    </span>
    <div className="pt-3">
      <Button
        disabled={props.disabled}
        variant={props.buttonVariant}
        color={props.buttonColor}
        text={props.actionText}
        to={props.to}
        redirect={props.redirect}
      />
    </div>
  </div>;

Action.propTypes = {
  to: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  buttonColor: PropTypes.oneOf([
    'green',
    'blue',
  ]),
  buttonVariant: PropTypes.oneOf([
    'contained',
    'outlined',
  ]),
  redirect: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Action;