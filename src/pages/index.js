import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ButtonLink from '../components/ButtonLink';
import Hero from '../assets/images/svg/inline/heart-logo.inline.svg';

const ProjectItem = ({ frontmatter, imageUrl }) => (
    <Link to={`/projects/${frontmatter.slug}`}>
        <div className="project">
            <div className="project-imagecontainer">
                <img
                    src={imageUrl}
                    className="project-image"
                    alt={`${frontmatter.title} screenshot`}
                    border="0"
                    width={600}
                />
            </div>
            <div className="project-namecontainer">
                <h3 className="heading heading-3 heading-highlight">{frontmatter.title}</h3>
            </div>
        </div>
    </Link>
);

const IndexPage = ({ data }) => {
    const edges = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <section className="tier tier-centered tier-lightbackground tier-diagonalbackground">
                <div className="grid grid-2colresponsive grid-small">
                    <div className="mix-centered">
                        <h1 className="heading heading-1 heading-primary">
                            Mark Goetz
                        </h1>
                        <Hero />
                    </div>
                    <div className="container">
                        <h2 className="heading heading-2 heading-primary">
                            Hello!
                        </h2>
                        <div className="spacer" />
                        <p className="txt">
                            I'm Mark Goetz, a front-end developer in Chicago.  I've been designing and coding web interfaces for 15 years.
                        </p>

                        <div className="spacer" />
                        <div className="spacer" />

                        <h2 className="heading heading-2 heading-primary">
                            Designy outside, mathy inside
                        </h2>
                        <div className="spacer" />
                        <p className="txt">
                            I combine technical knowledge with design sense and empathy to make excellent web experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="tier tier-centered tier-darkbackground">
                <div className="grid grid-2colresponsive grid-small">
                    <div className="vlist vlist-small">
                        <h2 className="heading heading-2 heading-secondary">My Skillset</h2>
                        <p className="txt">Have a look at my skills and experience, and what I can offer for you.</p>
                        <div className="mix-centered">
                            <ButtonLink url="/static/resume" caption="My Resume" />
                        </div>
                    </div>
                    <div>
                        <ul className="bulletlist">
                            <li className="txt">JavaScript (ES6)</li>
                            <li className="txt">TypeScript</li>
                            <li className="txt">React</li>
                            <li className="txt">HTML 5</li>
                            <li className="txt">CSS3 / Sass</li>
                            <li className="txt">VueJS</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="tier tier-centered tier-lightbackground">
                <div className="vlist vlist-small">
                    <h2 className="heading heading-2 heading-secondary">My Projects</h2>
                    <p className="txt">I've made a number of awesome web experiences, both professionally and personally.</p>
                    <ul className="grid grid-small grid-2colresponsive">
                        { edges.map(edge => {
                            const file = data.allFile.edges.find(fileEdge => fileEdge.node.name === edge.node.frontmatter.headerImage);

                            return (
                                <li key={edge.node.frontmatter.slug}>
                                    <ProjectItem frontmatter={edge.node.frontmatter} imageUrl={file.node.publicURL} />
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mix-centered">
                        <ButtonLink url="/projects" caption="All Projects" />
                    </div>
                </div>
            </section>

            <section className="tier tier-darkbackground">
                <div className="vlist vlist-small">
                    <h2 className="heading heading-2 heading-secondary">About Me</h2>
                    <p className="txt">I am also a human being! &nbsp;Learn more about me here!</p>
                    <div className="mix-centered">
                        <ButtonLink url="/static/about" caption="About Me" />
                    </div>
                </div>
            </section>
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

export default IndexPage;
