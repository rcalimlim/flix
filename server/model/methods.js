const { setup } = require('axios-cache-adapter');

// Create axios instance with pre-configured axios-cache-adapter attached to it
const api = setup({
  // axios options
  baseURL: 'https://unogs-unogs-v1.p.rapidapi.com',

  // axios-cache-adapter options
  cache: {
    exclude: { query: false },
    maxAge: 15 * 60 * 1000,
    readHeaders: true,
  },
});

const loadTitle = async (title) => {
  const headers = {
    'x-rapidapi-host': process.env.API_HOST,
    'x-rapidapi-key': process.env.API_KEY,
  };
  const params = {
    t: 'loadvideo',
    q: title,
  };
  const result = await api.get('/aaapi.cgi', { headers, params });
  return result.data;
};

module.exports = { loadTitle };
