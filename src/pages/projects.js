import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ProjectItem = ({ frontmatter, imageUrl }) => {
    return (
        <Link to={`/projects/${frontmatter.slug}`}>
            <div className="project">
                <div className="project-imagecontainer">
                    <img
                        src={imageUrl}
                        className="project-image"
                        alt={`${frontmatter.title} screenshot`}
                    />
                </div>
                <div className="project-namecontainer">
                    <h2 className="heading heading-2 heading-white">
                        {frontmatter.title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

const ProjectsListPage = ({ data }) => {
    const edges = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Projects" />
            <div className="tier tier-lightbackground">
                <h1 className="heading heading-1 heading-primary">Projects</h1>
                <div className="spacer" />
                <ul className="vlist">
                    { edges.map(edge => {
                        const file = data.allFile.edges.find(fileEdge => fileEdge.node.name === edge.node.frontmatter.headerImage);

                        return (
                            <li key={edge.node.frontmatter.slug}>
                                <ProjectItem frontmatter={edge.node.frontmatter} imageUrl={file.node.publicURL} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___order}) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        headerImage
                    }
                }
            }
        }
        allFile(filter: {relativeDirectory: {eq: "headerimages"}}) {
            edges {
                node {
                    name
                    publicURL
                }
            }
        }
    }
`;

export default ProjectsListPage;
