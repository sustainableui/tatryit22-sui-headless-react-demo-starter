import Button from '../../common/Button';
import Description from './Description';
import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const CallTo = props =>
  <ScrollableSection hash={props.id}>
    <div className="flex flex-col justify-center items-center h-full h-screen">
      <Headline
        text={props.headline}
        theme={props.theme}
      />
      <Description
        text={props.description}
        theme={props.theme}
      />
      <Button
        variant="contained"
        color={props.theme === 'green' ? 'blue' : (props.theme === 'blue' ? 'green' : '')}
        text={props.action}
        to={props.actionTo}
      />
    </div>
  </ScrollableSection>;

CallTo.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
  action: PropTypes.string.isRequired,
  actionTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default CallTo;