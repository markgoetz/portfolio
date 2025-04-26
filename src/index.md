---
layout: layout.njk
title: "Homepage"
---
{% import "./_includes/buttonlink.njk" as buttonlink %}

<section class="tier tier-centered tier-lightbackground tier-diagonalbackground">
    <div class="grid grid-2colresponsive grid-small">
        <div class="mix-centered">
            <h1 class="heading heading-1 heading-primary">
                mark goetz
            </h1>
            {%- inlineSvg './src/assets/images/svg/inline/heart-logo.inline.svg' -%}
        </div>
        <div class="container">
            <h2 class="heading heading-2 heading-primary">
                Hello!
            </h2>
            <div class="spacer"></div>
            <p class="txt">
                I'm Mark Goetz, a front-end developer in Philadelphia.  I've been designing and coding web interfaces for 15 years.
            </p>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <h2 class="heading heading-2 heading-primary">
                Designy outside, mathy inside
            </h2>
            <div class="spacer"></div>
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
                {{ buttonlink.buttonlink("My Resume", "/resume/") }}
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
            {%- for post in collections.project | reverse -%}
            <li>
                <a href="{{post.url}}">
                    <span class="project">
                        <span class="project-imagecontainer">
                            <img
                                src="/assets/images/headerimages/{{post.data.headerImage}}.png"
                                class="project-image"
                                alt="{{post.data.title}} screenshot"
                                border="0"
                                width="600"
                            />
                        </span>
                        <span class="project-namecontainer">
                            <h3 class="heading heading-3 heading-highlight">{{post.data.title}}</h3>
                        </span>
                    </span>
                </a>
            </li>
            {%- endfor -%}
        </ul>
        <div class="mix-centered">
            {{ buttonlink.buttonlink("My Projects", "/projects/") }}
        </div>
    </div>
</section>

<section class="tier tier-darkbackground">
    <div class="vlist vlist-small">
        <h2 class="heading heading-2 heading-secondary">About Me</h2>
        <p class="txt">I am also a human being! &nbsp;Learn more about me here!</p>
        <div class="mix-centered">
            {{ buttonlink.buttonlink("About Me", "/about/") }}
        </div>
    </div>
</section>
