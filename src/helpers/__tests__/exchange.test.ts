import nock from 'nock';

import { FIXER_API_URL } from '../../config/server';
import exchangeHelper from '../exchange';

describe('Exchange helper', () => {
  describe('getExchange()', () => {
    it('should get currency exchange data', async () => {
      // Arrange
      const request = { from: 'usd', to: 'thb' };
      const response = {
        rates: {
          THB: 35.664055,
          USD: 1.123949
        },
        timestamp: 1552190346
      };
      const result = {
        rate: 31.73102605189381,
        timestamp: 1552190346
      };

      nock(FIXER_API_URL)
        .persist()
        .get('?access_key=undefined')
        .reply(200, response);

      // Act
      const data = await exchangeHelper.getExchange(request.from, request.to);

      // Assert
      expect(data).toEqual(result);
    });
  });
});
