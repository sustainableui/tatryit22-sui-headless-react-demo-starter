import Link from './Link';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../config/routes';
import React from 'react';

const Links = (props) => (
  <React.Fragment>
    <Link text="Domov" to={ROUTES.VITAJTE} onClick={props.onClick} />
    <Link text="O Nás" to={ROUTES.O_NAS_HASH} onClick={props.onClick} />
  </React.Fragment>
);

Links.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Links;
