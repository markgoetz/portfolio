/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div id="container">
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <footer className="tier tier-centered tier-darkbackground tier-nomargin">
                <div class="vlist vlist-small vlist-centeritems">
                    <p class="txt txt-white">
                        Copyright {new Date().getFullYear()} Markandrewgoetz.com. All rights reserved
                        &nbsp;•&nbsp;
                        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
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
