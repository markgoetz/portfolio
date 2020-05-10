const path = require('path');

const createStaticPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const staticTemplate = path.resolve('src/templates/StaticTemplate.js');
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
};

const createProjectPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const projectTemplate = path.resolve('src/templates/ProjectTemplate.js');
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
            context: { slug: node.frontmatter.slug, headerImage: node.frontmatter.headerImage },
        });
    });
};

exports.createPages = async({ actions, graphql, reporter }) => {
    await createStaticPages({ actions, graphql, reporter });
    await createProjectPages({ actions, graphql, reporter });
}