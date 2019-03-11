import countryService, { Country } from '../services/country';

// Get countries
async function getCountries(currencyCode?: string): Promise<Country[]> {
  const path = currencyCode ? `/currency/${currencyCode}` : '/all';
  const countries = await countryService.getCountries(path);

  return countries;
}

export default { getCountries };
