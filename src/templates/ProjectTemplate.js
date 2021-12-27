import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ProjectTemplate = ({ data }) => {
    const { markdownRemark, file } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="project">
                <div className="project-namecontainer">
                    <h1 className="heading heading-1 heading-white">{frontmatter.title}</h1>
                </div>
                <div>
                    <img
                        src={file.publicURL}
                        className="project-image"
                        alt={`${frontmatter.title} screenshot`}
                    />
                </div>
            </div>

            <div className="twocolumnlayout">
                <main className="txt" dangerouslySetInnerHTML={{ __html: html }} />

                <aside className="sidebar">
                    <div className="vlist vlist-xsmall">
                        <h2 className="heading heading-2 heading-decorated">What I did</h2>
                        <ul className="linklist">
                            {frontmatter.skills.map(skill => <li className="linklist-item" key={skill}>{skill}</li>)}
                        </ul>
                    </div>

                    <div className="vlist vlist-xsmall">
                        <h2 className="heading heading-2 heading-decorated">Links</h2>
                        <ul className="linklist">
                            {frontmatter.links.map(link => (
                                <li key={link.url} className="linklist-item"><a href={link.url}>{link.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($slug: String!, $headerImage: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                skills
                links {
                    title
                    url
                }
                title
            }
        }
        file(name: {eq: $headerImage}, relativeDirectory: {eq: "headerimages"}) {
            publicURL
        }
    }
`;

export default ProjectTemplate;