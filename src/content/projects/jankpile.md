---
layout: project.njk
title: "Jankpile"
headerImage: "jankpile"
order: 0
skills:
    - CSS
    - Sass
    - React
    - Redux Toolkit
    - TypeScript
    - HTML 5
links:
    - { url: "https://jankpile.com", title: "Live site" }
    - { url: "https://github.com/markgoetz/jankpile", title: "GitHub repository" }
---

Jankpile is a web app to help Magic: the Gathering players construct Brawl and Historic Brawl decks.  Players can search for commanders by color, select a commander, then add spells and lands to their deck.  Jankpile includes search features to help players find spells that go well with their commander, and also summarizes decks to help players know the right combination of lands to add.

Jankpile was built in 2022 using React, Redux Toolkit, Sass, and TypeScript.  It retrieves cards by connecting to [Scryfall](https://scryfall.com/docs/api), which is Magic the Gathering's public-facing API.  It is hosted on Netlify and uses serverless functions to maintain both the client-side code and server-side code in a single codebase.
