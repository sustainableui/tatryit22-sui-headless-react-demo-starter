import Action from './Action';
import Description from './Description';
import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';

const CallTo = props =>
  <div className="grid grid-rows-6 h-full overflow-hidden">
    <div className="row-span-2" />
    <Headline
      text={props.headline}
      theme={props.theme}
    />
    <Description
      text={props.description}
      theme={props.theme}
    />
    <Action
      theme={props.theme}
      text={props.action}
      to={props.actionTo}
    />
    <div />
  </div>;

CallTo.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
  action: PropTypes.string.isRequired,
  actionTo: PropTypes.string.isRequired,
}

export default CallTo;