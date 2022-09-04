import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ButtonLink from '../components/ButtonLink';
import Hero from '../assets/images/svg/inline/heart-logo.inline.svg';

const ProjectItem = ({ frontmatter, imageUrl }) => (
    <Link to={`/projects/${frontmatter.slug}`}>
        <div class="project">
            <div class="project-imagecontainer">
                <img
                    src={imageUrl}
                    class="project-image"
                    alt={`${frontmatter.title} screenshot`}
                    border="0"
                    width={600}
                />
            </div>
            <div class="project-namecontainer">
                <h3 class="heading heading-3 heading-highlight">{frontmatter.title}</h3>
            </div>
        </div>
    </Link>
);

const IndexPage = ({ data }) => {
    const edges = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <section class="tier tier-centered tier-lightbackground tier-diagonalbackground">
                <div class="grid grid-2colresponsive grid-small">
                    <div class="mix-centered">
                        <h1 class="heading heading-1 heading-primary">
                            mark goetz
                        </h1>
                        <Hero />
                    </div>
                    <div class="container">
                        <h2 class="heading heading-2 heading-primary">
                            Hello!
                        </h2>
                        <div class="spacer" />
                        <p class="txt">
                            I'm Mark Goetz, a front-end developer in New Jersey.  I've been designing and coding web interfaces for 15 years.
                        </p>

                        <div class="spacer" />
                        <div class="spacer" />

                        <h2 class="heading heading-2 heading-primary">
                            Designy outside, mathy inside
                        </h2>
                        <div class="spacer" />
                        <p class="txt">
                            I combine technical knowledge with design sense and empathy to make excellent web experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section class="tier tier-centered tier-darkbackground">
                <div class="grid grid-2colresponsive grid-small">
                    <div class="vlist vlist-small">
                        <h2 class="heading heading-2 heading-secondary">My Skillset</h2>
                        <p class="txt">Have a look at my skills and experience, and what I can offer for you.</p>
                        <div class="mix-centered">
                            <ButtonLink url="/static/resume" caption="My Resume" />
                        </div>
                    </div>
                    <div>
                        <ul class="bulletlist">
                            <li class="txt">JavaScript (ES6)</li>
                            <li class="txt">TypeScript</li>
                            <li class="txt">React</li>
                            <li class="txt">HTML 5</li>
                            <li class="txt">CSS3 / Sass</li>
                            <li class="txt">VueJS</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="tier tier-centered tier-lightbackground">
                <div class="vlist vlist-small">
                    <h2 class="heading heading-2 heading-secondary">My Projects</h2>
                    <p class="txt">I've made a number of awesome web experiences, both professionally and personally.</p>
                    <ul class="grid grid-small grid-2colresponsive">
                        { edges.map(edge => {
                            const file = data.allFile.edges.find(fileEdge => fileEdge.node.name === edge.node.frontmatter.headerImage);

                            return (
                                <li key={edge.node.frontmatter.slug}>
                                    <ProjectItem frontmatter={edge.node.frontmatter} imageUrl={file.node.publicURL} />
                                </li>
                            );
                        })}
                    </ul>
                    <div class="mix-centered">
                        <ButtonLink url="/projects" caption="All Projects" />
                    </div>
                </div>
            </section>

            <section class="tier tier-darkbackground">
                <div class="vlist vlist-small">
                    <h2 class="heading heading-2 heading-secondary">About Me</h2>
                    <p class="txt">I am also a human being! &nbsp;Learn more about me here!</p>
                    <div class="mix-centered">
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
