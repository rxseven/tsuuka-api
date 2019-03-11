import Router from 'express-promise-router';

import exchangeController from '../controllers/exchange';

// Creates a new router object
const router = Router();

// Convert currencies
router.route('/').get(exchangeController.convertCurrencies);

export default router;
