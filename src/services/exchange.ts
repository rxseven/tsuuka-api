import axios from 'axios';

import { FIXER_API_URL } from '../config/server';

export interface Forex {
  rates: { [key: string]: number };
  timestamp: number;
}

// Get currency exchange data
async function getExchange(): Promise<Forex> {
  // Make an HTTP request to the external API
  const response = await axios.get(
    `${FIXER_API_URL}?access_key=${process.env.FIXER_API_KEY}`
  );

  // Retrieve data in a response and transform to an appropriate format
  const { data } = response;

  // Return a response
  return data;
}

export default { getExchange };
