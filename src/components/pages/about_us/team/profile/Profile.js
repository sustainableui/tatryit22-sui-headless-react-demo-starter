import Description from './Description';
import Image from './Image';
import PropTypes from 'prop-types';
import React from 'react';

const Profile = props => 
  <div className="inline-block w-72 ml-16 mr-16">
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
}

export default Profile;