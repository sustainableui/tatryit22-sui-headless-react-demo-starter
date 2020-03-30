import { LINKS } from '../../../config/transitions';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import React from 'react';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const LinkComponent = props => {
  const handleClick = () => {
    setDocumentTitleFromRoute(props.to);
    if (props.menuInSidebar) {
      props.onClick();
    }
  }

  return (
    <div className={props.menuInSidebar ? '' : 'sm:hidden xs:hidden'}>
      <Link
        smooth
        to={props.to}
        onClick={handleClick}
        className={`${LINKS} ${props.isActive ? 'text-blue pointer-events-none' : 'text-black hover:text-gray-hover'} leading-24 lg:leading-20 md:leading-16 align-middle`}
      >
        {props.text}
      </Link>
    </div>
  );
}

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  menuInSidebar: PropTypes.bool,
  onClick: PropTypes.func,
}

export default LinkComponent;