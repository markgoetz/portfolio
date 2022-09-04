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
                        class
                        serviceName
                        url
                    }
                }
            }
        }
    `);

    return (
        <div class="sitecontainer">
            <Header siteTitle={data.site.siteMetadata.title} links={data.site.siteMetadata.links} />
            <main class="main">
                <div class="content">
                    {children}
                </div>
            </main>
            <footer class="menubar">
                <div class="mix-centered">
                    <p class="txt txt-white">
                        Copyright {new Date().getFullYear()} Mark Goetz. All rights reserved
                        &nbsp;•&nbsp;
                        Built with <a class="link link-white" href="https://www.gatsbyjs.org">Gatsby</a>
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
