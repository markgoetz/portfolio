import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonLink = ({ caption, url }) => {
    return (
        <Link to={url} className="button">
            <span class="button-outer-top"></span>
            <span class="button-outer-bottom"></span>
            <span class="button-inner">{caption}</span>
        </Link>
    );
};

ButtonLink.propTypes = {
    caption: PropTypes.string,
    url: PropTypes.string,
};

export default ButtonLink;
