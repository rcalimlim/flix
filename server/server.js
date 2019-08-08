// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const methods = require('./model/methods');

const app = express();
const port = process.env.SERVER_PORT;
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

// search for a title by text, return array of matching titles
app.get('/api/search/matching', async (req, res) => {
  const { title } = req.query;
  const matching = await methods.loadTitlesFromFuzzySearch(title);
  res.send(matching.slice(0, 3));
});

// search for a title, return similar movies
app.get('/api/search/suggestions', async (req, res) => {
  const { title } = req.query;
  const titleInfo = await methods.loadGenreInfoFromTitleId(title);
  const genre = titleInfo[0];
  const similar = await methods.loadMoviesFromGenre(genre);
  res.send(similar.slice(0, 10));
});

app.listen(port, () => console.log(`Server is running on ${port}`));
