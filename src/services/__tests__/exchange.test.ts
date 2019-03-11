/* eslint-disable @typescript-eslint/camelcase */
import nock from 'nock';

import { FIXER_API_URL } from '../../config/server';
import exchangeService from '../exchange';

describe('Exchange service', () => {
  describe('getExchange()', () => {
    it('should get Forex data from the external API', async () => {
      // Arrange
      const response = {
        rates: {
          THB: 35.648682,
          USD: 1.123464
        },
        timestamp: 1552140846
      };

      nock(FIXER_API_URL)
        .persist()
        .get('?access_key=undefined')
        .reply(200, response);

      // Act
      const data = await exchangeService.getExchange();

      // Assert
      expect(data).toEqual(response);
    });
  });
});
