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
                <div className="project-imagecontainer">
                    <img
                        src={file.publicURL}
                        className="project-image"
                        alt={`${frontmatter.title} screenshot`}
                    />
                </div>
                <div className="project-namecontainer">
                    <h1 className="heading heading-2 heading-white">{frontmatter.title}</h1>
                </div>
            </div>

            <div className="twocolumnlayout">
                <main className="txt">
                    <div className="usercontent" dangerouslySetInnerHTML={{ __html: html }} />
                </main>

                <aside className="sidebar">
                    <div className="vlist vlist-xsmall">
                        <h2 className="heading heading-2 heading-secondary">What I did</h2>
                        <ul className="bulletlist">
                            {frontmatter.skills.map(skill => <li className="txt" key={skill}>{skill}</li>)}
                        </ul>
                    </div>

                    <div className="vlist vlist-xsmall">
                        <h2 className="heading heading-2 heading-secondary">Links</h2>
                        <ul className="bulletlist">
                            {frontmatter.links.map(link => (
                                <li key={link.url} className="txt"><a href={link.url}>{link.title}</a></li>
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