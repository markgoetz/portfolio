import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import Hero from '../assets/images/svg/inline/heart-logo-broken.inline.svg';


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section class="tier tier-centered">
      <div class="heartlogo">
        {/* <Hero /> */}
      </div>
      <div class="container">
        <h1 class="heading heading-1">Oh no.</h1>
        <div class="spacer" />
        <p class="txt">
          You've either followed a broken link, or broken my heart.  Why don't you go <Link to="/">back to the homepage?</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
