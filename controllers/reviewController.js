const Review = require('./../models/reviewmodel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getallReviews = catchAsync(async(req, res, next) => {

    const review = await Review.find();
    res.status(200).json({
        status: 'success',
        results: review.length,
        data: {
            review
        }
    })

});
exports.createReview = catchAsync(async(req, res, next) => {

    const newReview = await Review.create(req.body);
    res.status(201).json({
        status: 'success',

        data: {
            newReview
        }
    })

});