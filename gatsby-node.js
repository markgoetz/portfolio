const path = require('path');

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const staticTemplate = path.resolve('src/templates/static.js');
    const projectTemplate = path.resolve('src/templates/project.js');

    const staticQuery = await graphql(`
        {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown-pages/"}})
            {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);

    if (staticQuery.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    staticQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: staticTemplate,
            context: {},
        });
    });

    const projectQuery = await graphql(`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
            edges {
                node {
                    frontmatter {
                        slug
                        skills
                        links {
                            title
                            url
                        }
                        title
                        headerImage
                    }
                }
            }
        }
    }`);

    if (projectQuery.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    projectQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/projects/${node.frontmatter.slug}`,
            component: projectTemplate,
            context: { slug: node.frontmatter.slug },
        });
    });
}