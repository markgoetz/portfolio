---
layout: layout.njk
title: "Projects"
---
<div class="tier tier-lightbackground">
    <h1 class="heading heading-1 heading-primary">Projects</h1>
    <div class="spacer"></div>
    <ul class="vlist">
        {%- for post in collections.project | reverse -%}
        <li>
            <a href="{{post.url}}">
                <span class="project">
                    <span class="project-imagecontainer">
                        <img
                            src="/assets/images/headerimages/{{post.data.headerImage}}.png"
                            class="project-image"
                            alt="{{post.data.title}} screenshot"
                        />
                    </span>
                    <span class="project-namecontainer">
                        <h2 class="heading heading-2 heading-highlight">
                            {{post.data.title}}
                        </h2>
                    </span>
                </span>
            </a>
        </li>
        {%- endfor -%}
    </ul>
</div>
