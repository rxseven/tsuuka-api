import exchangeService from '../services/exchange';

interface Country {
  code: string;
  name: string;
}

interface Exchange {
  rate: number;
  timestamp: number;
}

// Get currency exchange data
async function getExchange(
  from: string,
  to: string
): Promise<Exchange | never> {
  try {
    const data = await exchangeService.getExchange();

    const { rates, timestamp } = data;
    const euro = 1 / rates[from.toUpperCase()];
    const rate = euro * rates[to.toUpperCase()];
    const exchange: Exchange = { rate, timestamp };

    return exchange;
  } catch (error) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
  }
}

export default { getExchange };
