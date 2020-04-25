import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"

const Template = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="tier tier-max900">
                <h1 className="heading heading-1">{frontmatter.title}</h1>
                <div className="spacer" />
                <main className="usercontent" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;

export default Template;