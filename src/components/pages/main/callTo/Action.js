import Button from '../../../common/buttons/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Action = props =>
  <div className="flex flex-col justify-center items-center">
    <Button
      variant="contained"
      color={props.theme === 'green' ? 'blue' : (props.theme === 'blue' ? 'green' : '')}
      text={props.text}
      to={props.to}
    />
  </div>;

Action.propTypes = {
  theme: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Action;