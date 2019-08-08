const { setup } = require('axios-cache-adapter');

// Create axios instance with pre-configured axios-cache-adapter attached to it
const api = setup({
  // axios options
  baseURL: 'https://unogs-unogs-v1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': process.env.API_HOST,
    'x-rapidapi-key': process.env.API_KEY,
  },

  // axios-cache-adapter options
  cache: {
    exclude: { query: false },
    maxAge: 15 * 60 * 1000,
    readHeaders: true,
  },
});

// returns array of possible title matches based on text search
const loadTitlesFromFuzzySearch = async (title) => {
  const params = {
    q: `${title}-!1900,2018-!0,5-!0,10-!0-!Movie-!Any-!Any-!gt100-!{downloadable}`,
    t: 'ns',
    cl: '78',
    st: 'adv',
    ob: 'Relevance',
    p: '1',
    sa: 'and',
  };
  const result = await api.get('/aaapi.cgi', { params });
  return result.data.ITEMS;
};

// returns array of genre ids related to title id
const loadGenreInfoFromTitleId = async (titleId) => {
  const params = {
    q: titleId,
    t: 'loadvideo',
  };
  const result = await api.get('/aaapi.cgi', { params });
  return result.data.RESULT.Genreid;
};

// returns array of related titles based on genre id
const loadMoviesFromGenre = async (genre) => {
  const params = {
    q: `-!1900,2018-!0,5-!0,10-!${genre}-!Movie-!Any-!Any-!gt100-!{downloadable}`,
    t: 'ns',
    cl: '78',
    st: 'adv',
    ob: 'Rating',
    p: '1',
    sa: 'and',
  };
  const result = await api.get('/aaapi.cgi', { params });
  return result.data.ITEMS;
};

module.exports = {
  loadTitlesFromFuzzySearch,
  loadGenreInfoFromTitleId,
  loadMoviesFromGenre,
};
