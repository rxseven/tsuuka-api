import axios from 'axios';

import { RESTCOUNTRIES_API_URL } from '../config/server';

export interface Country {
  alpha2Code: string;
  currencies: [{ code: string; name: string }];
  name: string;
}

// Get countries
async function getCountries(path: string): Promise<Country[]> {
  // Make an HTTP request to the external API
  const response = await axios.get(`${RESTCOUNTRIES_API_URL}${path}`);

  // Retrieve data in a response and transform to an appropriate format
  const { data } = response;

  // Return a response
  return data;
}

export default { getCountries };
