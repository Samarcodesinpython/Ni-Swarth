// backend/controllers/donationController.js
import Donation from '../models/Donation.js';

// Create a new donation
export const createDonation = async (req, res) => {
    try {
        const newDonation = new Donation(req.body);
        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create donation', error: error.message });
    }
};

// Get all donations
export const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch donations', error: error.message });
    }
};

// Get a single donation by ID
export const getDonationById = async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        res.status(200).json(donation);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch donation', error: error.message });
    }
};

// Update a donation by ID
export const updateDonation = async (req, res) => {
    try {
        const updatedDonation = await Donation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedDonation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        res.status(200).json(updatedDonation);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update donation', error: error.message });
    }
};

// Delete a donation by ID
export const deleteDonation = async (req, res) => {
    try {
        const deletedDonation = await Donation.findByIdAndDelete(req.params.id);
        if (!deletedDonation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete donation', error: error.message });
    }
};