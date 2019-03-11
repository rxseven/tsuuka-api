import { Response, Request } from 'express';
import { isEqualWith, uniqWith } from 'lodash';

import countryHelper from '../helpers/country';

interface Country {
  currencies: any[];
}

interface Currencies {
  code: string;
  name: string;
}

// Get currencies
async function getCurrencies(req: Request, res: Response): Promise<Response> {
  try {
    const currencies: Currencies[] = [];

    // Get all countries
    const countries = await countryHelper.getCountries();

    // Get currencies for each country
    countries.forEach((country: Country) => {
      country.currencies.forEach(currency => {
        currencies.push({
          code: currency.code,
          name: currency.name
        });
      });
    });

    // Create a duplicate-free version of an array of currency objects by performing
    // a deep comparison between two values to determine if they are equivalent.
    const uniqueData = uniqWith(currencies, (array, other) => {
      return isEqualWith(
        array,
        other,
        (value, another) => value.code === another.code
      );
    });

    // Remove incomplete currencies
    const filteredData = uniqueData.filter(currency => currency.code);

    // Fix typos
    const result = filteredData.map(currency => {
      if (currency.name === 'United State Dollar') {
        return { ...currency, name: 'United States Dollar' };
      }

      return currency;
    });

    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Something went wrong', status: 'error' });
  }
}

export default { getCurrencies };
