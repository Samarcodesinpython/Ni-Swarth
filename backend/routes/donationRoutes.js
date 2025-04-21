// backend/routes/donationRoutes.js
import express from 'express';
import * as donationController from '../controllers/donationController.js';
const router = express.Router();

// Create a new donation
router.post('/donations', donationController.createDonation);

// Get all donations
router.get('/donations', donationController.getAllDonations);

// Get a single donation by ID
router.get('/donations/:id', donationController.getDonationById);

// Update a donation by ID
router.put('/donations/:id', donationController.updateDonation);

// Delete a donation by ID
router.delete('/donations/:id', donationController.deleteDonation);

export default router;