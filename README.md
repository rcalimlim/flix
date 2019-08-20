# Quick Flix
<img src="./readme/quickflix-logo.png" width="400" />

## About

Quick Flix is a webapp aimed at providing Netflix movies suggestions based on a user-provided title.

This app allows users to quickly find Netflix movie suggestions that are guaranteed to be up-to-date. Suggestions are chosen by an algorith that measures genre similarity and IMDB rating.

### Contributors
- [Ross F. Calimlim](https://github.com/rcalimlim)

### Tech Stack
Quick Flix was built in two days using ReactJS, NodeJS/Express, and the [uNoGS](https://rapidapi.com/unogs/api/unogs) API (unofficial Netflix online Global Search). I deployed the app with PM2 (and briefly Docker) onto a DigitalOcean droplet. All styling was done in React Bootstrap.

<img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" width="100">
<img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="110" />
<img src="https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="130" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="150" />
<img src="https://developers.redhat.com/blog/wp-content/uploads/2015/01/docker-whale-home-logo.png" width="150" />
<img src="https://raw.githubusercontent.com/unitech/pm2/master/pres/pm2.20d3ef.png" width="190" />
<img src="https://freeicons.io/laravel/public/uploads/icons/png/20221539571536233212-512.png" width="120" />

### Technical Challenges / Research

- First and foremost, the two-day time constraint made this an interesting study of the importance of clear, actionable goals based on well-defined MVP features. There were a number of times when I wanted to add more features that would have made tha app more interesting or resopnsive, but there was just no time.

- Netflix [deprecated their public API in 2014](https://techcrunch.com/2014/11/16/netflix-api/). This made building an app with a sole-purpose of searching for netflix recommendations very challenging. Fortunately I found a strong alternative--uNoGS. The uNoGS API is a freemium API that has up-to-date movie and tv-show listing for all Netflix regions. Though robust, there is a significant lack of documentation which wound up being a bit of a time sink.

- Server-side request caching was an emergent feature--once I hit my limit for requests by lunch time of Day 1, I knew I had to find a way to cache similar requests from end users. I used the [`axios-cache-adapter`](https://www.npmjs.com/package/axios-cache-adapter) to painlessly set this up.


## Client Deliverables

I worked to meet the MVP requirements:

- As a user, I want to see movie recommendations based on a movie title I input.
- As a user, I should receive feedback when my search is processing.
- As a user, I should receive feedback when my input doesn't exist in Netflix's database.
- As a user, I should get a list of movie suggestions orderec by relevance and rating.

### Minimum Viable Product (MVP)

The MVP in this case was the entire application. The main feature was a search function that recommends similar movies based on an input.

### How the App Works
<img src="./readme/quickflix-search.gif" width="300" />
<img src="./readme/quickflix-movie-search.gif" width="200" />

### Workflow

I used an Agile workflow with Trello for ticket management, milestone tracking, and sprint planning.

I used a feature branch git workflow that I merged into master after review.

### Future Features

Given time, I'd like to:

- Do a deep-dive into movie suggestion algorithms. There's a lot of data there, and finding a unique perspective on recommendations would be interesting for me.
- Implement a fully-featured testing suite and continuous integration to ensure new features work correctly.
- Improve user input and visual feedback for the search recommendations. Right now they're a bit flat.
