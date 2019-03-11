import nock from 'nock';

import { RESTCOUNTRIES_API_URL } from '../../config/server';
import countryHelper from '../country';

describe('Country helper', () => {
  describe('getCountries()', () => {
    const output = [
      {
        alpha2Code: 'TH',
        currencies: [
          {
            code: 'THB',
            name: 'Thai Baht'
          }
        ],
        name: 'Thailand'
      },
      {
        alpha2Code: 'SG',
        currencies: [
          {
            code: 'SGD',
            name: 'Singapore Dollar'
          }
        ],
        name: 'Singapore'
      }
    ];

    it('should get all countries', async () => {
      // Arrange
      const response = output;

      nock(RESTCOUNTRIES_API_URL)
        .persist()
        .get('/all')
        .reply(200, response);

      // Act
      const data = await countryHelper.getCountries();

      // Assert
      expect(data).toEqual(response);
    });

    it('should get countries by currency code', async () => {
      // Arrange
      const request = 'sgd';
      const response = output;

      nock(RESTCOUNTRIES_API_URL)
        .persist()
        .get(`/currency/${request}`)
        .reply(200, response);

      // Act
      const data = await countryHelper.getCountries(request);

      // Assert
      expect(data).toEqual(response);
    });
  });
});
