// backend/models/Donation.js
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    itemDetails: {
        type: String,
        required: true
    },
    images: [String],
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'accepted', 'picked', 'delivered'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    acceptedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pickedUpBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    deliveredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    acceptanceNotes: String,
    pickupNotes: String,
    deliveryNotes: String
});

donationSchema.index({ location: '2dsphere' });

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;