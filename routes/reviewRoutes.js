const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const express = require('express');
const router = express.Router();


router.route('/')
    .get(reviewController.getallReviews)
    .post( reviewController.createReview);

    // authController.protect, authController.restrictTo('admin'),

module.exports = router;