import exchangeService from '../services/exchange';
import countryHelper from './country';

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

// Get compact countries by currency code
async function getCountries(currencyCode: string): Promise<Country[] | never> {
  try {
    const data = await countryHelper.getCountries(currencyCode);

    const countries = data.map(country => ({
      code: country.alpha2Code,
      name: country.name
    }));

    return countries;
  } catch (error) {
    throw new Error(
      `Unable to get countries that use ${currencyCode.toUpperCase()}.`
    );
  }
}

export default { getCountries, getExchange };
