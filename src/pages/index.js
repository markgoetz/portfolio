import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../assets/images/svg/inline/heart-logo.inline.svg';

const ProjectItem = ({ frontmatter, imageUrl }) => (
    <Link to={`/projects/${frontmatter.slug}`}>>
        <div className="project project-hover">
            <div className="project-namecontainer">
                <h3 className="heading heading-3 heading-white">{frontmatter.title}</h3>
            </div>
            <img
                src={imageUrl}
                className="project-image"
                alt={`${frontmatter.title} screenshot`}
            />
        </div>
    </Link>
);

const IndexPage = ({ data }) => {
    const edges = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <section className="tier tier-centered tier-max900">
                <div className="vlist vlist-large vlist-centeritems">
                    <div className="heartlogo">
                        <Hero />
                    </div>
                    <div className="container">
                        <h1 className="heading heading-1">
                            I'm Mark Goetz, a web developer and designer in Chicago.
                        </h1>
                        <div className="spacer" />
                        <p className="txt">
                            As a UX designer for 7 years and a developer for over 20, I combine deep technical knowledge with good design sense to make delightful web experiences.
                            I specialize in JavaScript, animations, and microinteractions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="tier tier-centered tier-lightbackground tier-max900">
                <div className="vlist vlist-small vlist-centeritems">
                    <h2 className="heading heading-2 heading-decorated">Projects</h2>
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
                    <Link to="/projects" className="button">All Projects</Link>
                </div>
            </section>
            <section className="tier tier-centered tier-lightbackground tier-max900">
                <div className="vlist vlist-small vlist-centeritems">
                    <h2 className="heading heading-2 heading-decorated">Resume</h2>
                    <p className="txt">Have a look at my skills and experience, and what I can offer for you.</p>
                    <ul className="grid grid-large grid-3col">
                        <li className="tagblock-item">JavaScript</li>
                        <li className="tagblock-item">React</li>
                        <li className="tagblock-item">HTML 5</li>
                        <li className="tagblock-item">CSS3</li>
                        <li className="tagblock-item">VueJS</li>
                        <li className="tagblock-item">Sass</li>
                    </ul>
                    <Link to="/static/resume" className="button">My Resume</Link>
                </div>
            </section>
            <section className="tier tier-centered tier-lightbackground tier-max900">
                <div className="vlist vlist-small vlist-centeritems">
                    <h2 className="heading heading-2 heading-decorated">About Me</h2>
                    <p className="txt">I am also a human being! &nbsp;Learn more about me here!</p>
                    <Link to="/static/about" className="button">About Me</Link>
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
