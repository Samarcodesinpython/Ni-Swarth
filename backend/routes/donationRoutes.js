//routes/donationRoutes.js

import express from 'express';
import * as donationController from '../controllers/donationController.js';

const router = express.Router();

// Base route is now /donations (defined in app.js or server.js)
router.post('/', donationController.createDonation);
router.get('/', donationController.getAllDonations);
router.get('/:id', donationController.getDonationById);
router.put('/:id', donationController.updateDonation);
router.delete('/:id', donationController.deleteDonation);
router.patch('/:id/status', donationController.updateDonationStatus);

export default router;
