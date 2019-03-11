import nock from 'nock';

import { RESTCOUNTRIES_API_URL } from '../../config/server';
import countryService from '../country';

describe('Country service', () => {
  describe('getCountries()', () => {
    it('should get countries from the external API', async () => {
      // Arrange
      const response = [
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

      nock(RESTCOUNTRIES_API_URL)
        .persist()
        .get('/all')
        .reply(200, response);

      // Act
      const data = await countryService.getCountries('/all');

      // Assert
      expect(data).toEqual(response);
    });
  });
});
