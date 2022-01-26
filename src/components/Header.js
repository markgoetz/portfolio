import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import LogoUrl from '../assets/images/svg/81-squares-header.svg';

const Header = ({ siteTitle, links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); }

    const menuClassName = (isMenuOpen ? '' : 'mix-closeonmobile ') + 'headerlist-item headerlist-item-maxwidth';

    return (
        <header className="menubar">
            <div className="headerlist">
                <div className="headerlist-item">
                    <Link to="/" className="link-homepage">
                        <div className="flag">
                            <div className="flag-image">
                                <img src={LogoUrl} alt="A heart made of 81 squares" width="61" height="61" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mix-hideondesktop headerlist-item">
                    <button type="button" className="menubutton" onClick={toggleMenu}>Menu</button>
                </div>
                <div className={menuClassName}>
                    <nav className="menu" id="menu">
                        <div>
                            <ul className="submenu">
                                <li className="menuitem"><Link className="menulink" to="/projects">Projects</Link></li>
                                <li className="menuitem"><Link className="menulink" to="/static/about">About Me</Link></li>
                                <li className="menuitem"><Link className="menulink" to="/static/resume">Resume</Link></li>
                            </ul>
                        </div>
                        <div className="submenu-maxspace">
                            <ul className="submenu">
                                {
                                    links.map(link => (
                                        <li className="menuitem" key={link.serviceName}>
                                            <a href={link.url} className={`menulink menulink-icon menulink-icon-${link.className}`}>{link.serviceName}</a>
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
        className: PropTypes.string,
        serviceName: PropTypes.string,
        url: PropTypes.string,
    })),
}

Header.defaultProps = {
  siteTitle: ``,
  links: [],
}

export default Header
