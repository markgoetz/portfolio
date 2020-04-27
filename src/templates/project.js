import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectTemplate = ({ data }) => {
    return (
        <React.Fragment>
            <div class="project">
                <div class="project-namecontainer">
                    <h1 class="heading heading-1 heading-white">Divisionizer</h1>
                </div>
                <img src="http://markandrewgoetz.com/assets/divisionizer.png" class="project-image" />
            </div>

            <div class="twocolumnlayout">
                <main class="txt">
                    <p>The Divisionizer is a web app&nbsp;to help people explore divisions for NHL teams. &nbsp;&nbsp;The announcement of an expansion team in Las Vegas led me to develop the application.</p>
                    <p>The original application was developed in 2011, when the team in Atlanta moved to Winnipeg but was still in the Southeast division.</p>
                    <p>The Divisionizer was built using HTML5, CSS3, Sass, React, and Webpack.</p>
                </main>

                <aside class="sidebar">
                    <div class="vlist vlist-xsmall">
                        <h2 class="heading heading-2 heading-decorated">What I did</h2>
                        <ul class="linklist">
                            <li class="linklist-item">CSS</li>
                            <li class="linklist-item">Sass</li>
                            <li class="linklist-item">React</li>
                            <li class="linklist-item">JavaScript</li>
                            <li class="linklist-item">HTML5</li>
                            <li class="linklist-item">Webpack</li>
                        </ul>
                    </div>

                    <div class="vlist vlist-xsmall">
                        <h2 class="heading heading-2 heading-decorated">Links</h2>
                        <ul class="linklist">
                            <li class="linklist-item"><a href="divisionizer.com">Divisionizer live site</a></li>
                            <li class="linklist-item"><a href="http://markandrewgoetz.com/wp-content/uploads/2016/08/wireframes.pdf">Wireframes</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </React.Fragment>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
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
                headerImage
            }
        }
    }
`;

export default ProjectTemplate;