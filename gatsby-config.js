module.exports = {
  siteMetadata: {
    title: `Mark Goetz`,
    description: `Portfolio of Mark Goetz, a web developer in Chicago.  Designy outside, mathy inside.`,
    author: `@markdoesnttweet`,
    links: [
      { className: 'github', serviceName: 'GitHub', url: 'http://www.github.com/markgoetz' },
      { className: 'linkedin', serviceName: 'LinkedIn', url: 'http://www.linkedin.com/in/markgoetz' },
      { className: 'codepen', serviceName: 'CodePen', url: 'https://codepen.io/markgoetz' },
      { className: 'email', serviceName: 'Email', url: 'mailto:mark@markandrewgoetz.com' },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include:  /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/heart.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
