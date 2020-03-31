import Description from './Description';
import Image from './Image';
import PropTypes from 'prop-types';
import React from 'react';

const Profile = props => 
  <div className={`inline-block ${props.noMarginRight ? '' : 'xl:mr-26 lg:mr-10'} ${props.noMarginLeft ? '' : 'xl:ml-26 lg:ml-10'} sm:w-40 xs:w-40 md:w-40 ${props.className}`}>
    <Image imagePath={props.imagePath} />
    <Description
      name={props.name}
      text={props.description}
    />
  </div>;

Profile.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  noMarginRight: PropTypes.bool,
  noMarginLeft: PropTypes.bool,
}

export default Profile;