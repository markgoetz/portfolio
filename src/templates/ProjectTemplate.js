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
            <div class="project">
                <div class="project-imagecontainer">
                    <img
                        src={file.publicURL}
                        class="project-image"
                        alt={`${frontmatter.title} screenshot`}
                    />
                </div>
                <div class="project-namecontainer">
                    <h1 class="heading heading-2 heading-highlight">{frontmatter.title}</h1>
                </div>
            </div>

            <div class="twocolumnlayout">
                <main class="txt">
                    <div class="usercontent" dangerouslySetInnerHTML={{ __html: html }} />
                </main>

                <aside class="sidebar">
                    <div class="vlist vlist-xsmall">
                        <h2 class="heading heading-2 heading-secondary">What I did</h2>
                        <ul class="bulletlist">
                            {frontmatter.skills.map(skill => <li class="txt" key={skill}>{skill}</li>)}
                        </ul>
                    </div>

                    <div class="vlist vlist-xsmall">
                        <h2 class="heading heading-2 heading-secondary">Links</h2>
                        <ul class="bulletlist">
                            {frontmatter.links.map(link => (
                                <li key={link.url} class="txt">
                                    <a class="link" href={link.url}>{link.title}</a>
                                </li>
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