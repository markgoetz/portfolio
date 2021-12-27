import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonLink = ({ caption, url }) => {
    return (
        <Link to={url} className="button">
            <span className="button-outer-top"></span>
            <span className="button-outer-bottom"></span>
            <span className="button-inner">{caption}</span>
        </Link>
    );
};

ButtonLink.propTypes = {
    caption: PropTypes.string,
    url: PropTypes.string,
};

export default ButtonLink;
