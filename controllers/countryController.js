const country = require('./../models/countryModel')
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const Hospital = require('./../models/hospitalModel');
const Country = require('./../models/countryModel');
exports.getallcountries = catchAsync(async(req, res, next) => {

    // EXECUTE QUERY
    const features = new APIFeatures(country.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const countries = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: countries.length,
        data: {
            countries
        }
    });
});
exports.getcountry = catchAsync(async(req, res, next) => {

        const country = await Country.findById(req.params.id);

        if (!country) {
            return next(new AppError('No country found with that ID', 404));
        } else {

            res.status(200).json({
                status: 'success',
                data: {
                    country
                }
            });
        }
    }

);
exports.getallHospitals = catchAsync(async(req, res, next) => {

        const country = await Country.findById(req.params.countryid)
        if (!country) {
            return next(new AppError('No country found with this id', 400));
        }
        const hospital = await Hospital.find({ country_name: country.name });

        if (!hospital || hospital === null) {
            return next(new AppError('No hospitals were found with that ID', 404));
        } else {

            res.status(200).json({
                status: 'success',
                results: hospital.length,
                data: {
                    hospital
                }
            });
        }
    }

);