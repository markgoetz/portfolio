import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header className="menubar">
        <div className="headerlist">
            <div className="headerlist-item">
                <Link to="/" className="link-homepage">
                    <div className="flag">
                        <div className="flag-image">
                            {/* TODO FIXXXX */}
                            <img src="/assets/images/svg/heart logo small.svg" alt="" width="70" height="70" />
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
                            {/* TODO: Pull this in from queries */}
                            <li className="menuitem">
                                <Link className="menulink menulink-icon menulink-icon-github" to="http://www.github.com/markgoetz">Github</Link>
                            </li>
                            <li className="menuitem">
                                <Link className="menulink menulink-icon menulink-icon-linkedin" to="http://www.linkedin.com/in/markgoetz">LinkedIn</Link>
                            </li>
                            <li className="menuitem">
                                <Link className="menulink menulink-icon menulink-icon-email" to="mailto:mark@markandrewgoetz.com">Email</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
