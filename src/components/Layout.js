import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                    links {
                        className
                        serviceName
                        url
                    }
                }
            }
        }
    `);

    return (
        <div className="sitecontainer">
            <Header siteTitle={data.site.siteMetadata.title} links={data.site.siteMetadata.links} />
            <main className="content">
                <div className="background">
                    {children}
                </div>
            </main>
            <footer className="menubar">
                <div className="mix-centered">
                    <p className="txt txt-white">
                        Copyright {new Date().getFullYear()} Mark Goetz. All rights reserved
                        &nbsp;•&nbsp;
                        Built with <a className="txt txt-white" href="https://www.gatsbyjs.org">Gatsby</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
