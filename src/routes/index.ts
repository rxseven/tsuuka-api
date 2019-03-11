import { Response, Request, Router } from 'express';

import currency from './currency';
import exchange from './exchange';

// Creates a new router object
const router = Router();

// Nested routes
router.use('/currencies', currency);
router.use('/exchange', exchange);

// Root route
router.route('/').get(
  (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Welcome to Tsūka API!' });
  }
);

export default router;
