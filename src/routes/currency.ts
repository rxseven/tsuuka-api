import Router from 'express-promise-router';

import currencyController from '../controllers/currency';

// Creates a new router object
const router = Router();

// Get currencies
router.route('/').get(currencyController.getCurrencies);

export default router;
