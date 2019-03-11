import { Response, Request } from 'express';

import exchangeHelper from '../helpers/exchange';

// Convert currencies
async function convertCurrencies(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { from, to } = req.query;
    const exchange = await exchangeHelper.getExchange(from, to);
    const countries = await exchangeHelper.getCountries(to);

    const result = {
      countries,
      rate: exchange.rate,
      timestamp: exchange.timestamp
    };

    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Something went wrong', status: 'error' });
  }
}

export default { convertCurrencies };
