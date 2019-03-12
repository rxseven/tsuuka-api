// API
const API_VERSION = 1;

// Port
const PORT = process.env.PORT || 5000;

// URLs
const FIXER_API_URL = 'http://data.fixer.io/api/latest';
const RESTCOUNTRIES_API_URL = 'https://restcountries.eu/rest/v2';

// Client origin
const whitelist = {
  development: ['http://localhost:3000'],
  production: ['https://tsuuka.herokuapp.com']
};

const CLIENT_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? whitelist.production
    : whitelist.development;

export {
  API_VERSION,
  CLIENT_ORIGIN,
  FIXER_API_URL,
  PORT,
  RESTCOUNTRIES_API_URL
};
