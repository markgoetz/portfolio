import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LogoUrl from '../assets/images/svg/heart logo small.svg';

const Header = ({ siteTitle, links }) => (
    <header className="menubar">
        <div className="headerlist">
            <div className="headerlist-item">
                <Link to="/" className="link-homepage">
                    <div className="flag">
                        <div className="flag-image">
                            <img src={LogoUrl} alt="Small logo of a heart made of gears" width="70" height="70" />
                        </div>
                        <div className="flag-text txt-pagetitle">{siteTitle}</div>
                    </div>
                </Link>
            </div>
            <div className="mix-hideondesktop headerlist-item">
                <button aria-hidden="true" id="menu-button" className="menubutton">menu</button>
            </div>
            <div className="mix-closeonmobile headerlist-item headerlist-item-maxwidth" id="menucontainer">
                <nav className="menu" id="menu">
                    <div>
                        <ul className="submenu">
                            <li className="menuitem"><Link className="menulink" to="/projects">Projects</Link></li>
                            <li className="menuitem"><Link className="menulink" to="/static/about">About</Link></li>
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
)

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
