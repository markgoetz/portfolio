import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import LogoUrl from '../assets/images/svg/81-squares-header.svg';

const Header = ({ siteTitle, links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); }

    const menuclass = (isMenuOpen ? '' : 'mix-closeonmobile ') + 'headerlist-item headerlist-item-maxwidth';

    return (
        <header class="menubar">
            <div class="headerlist">
                <div class="headerlist-item">
                    <Link to="/" class="link-homepage">
                        <div class="flag">
                            <div class="flag-image">
                                <img src={LogoUrl} alt="A heart made of 81 squares" width="61" height="61" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="mix-hideondesktop headerlist-item">
                    <button type="button" class="menubutton" onClick={toggleMenu}>Menu</button>
                </div>
                <div class={menuclass}>
                    <nav class="menu" id="menu">
                        <div>
                            <ul class="submenu">
                                <li class="menuitem"><Link class="menulink" to="/projects">Projects</Link></li>
                                <li class="menuitem"><Link class="menulink" to="/static/about">About Me</Link></li>
                                <li class="menuitem"><Link class="menulink" to="/static/resume">Resume</Link></li>
                            </ul>
                        </div>
                        <div class="submenu-maxspace">
                            <ul class="submenu">
                                {
                                    links.map(link => (
                                        <li class="menuitem" key={link.serviceName}>
                                            <a href={link.url} class={`menulink menulink-icon menulink-icon-${link.class}`}>{link.serviceName}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        class: PropTypes.string,
        serviceName: PropTypes.string,
        url: PropTypes.string,
    })),
}

Header.defaultProps = {
  siteTitle: ``,
  links: [],
}

export default Header
