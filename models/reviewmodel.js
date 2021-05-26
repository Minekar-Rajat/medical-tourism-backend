const mongoose = require("mongoose");
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { stringify } = require('json5');
const reviewSchema = new mongoose.Schema({


    review: {
        type: String,
        required: [true, 'Review cannot be empty']

    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    hospital: [{
        type: mongoose.Schema.ObjectId,
        ref: 'hospital'

    }],
    doctor: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor'
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'a review must belong to a user']
    }


}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
reviewSchema.pre(/^find/, function(next) {

    this.populate({
            path: 'user',
            select: 'name'
        })
        // populate({
        //     path: 'hospital',
        //     select: 'name'
        // })
        // .populate({
        //     path: 'doctor',
        //     select: 'name'
        // })

    next();
})
const review = mongoose.model('review', reviewSchema);
module.exports = review;