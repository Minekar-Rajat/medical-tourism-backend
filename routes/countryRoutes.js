const express = require('express');
const countryController = require('./../controllers/countryController');
const router = express.Router();
const authController = require('./../controllers/authController')
router.route('/getallcountries').get( countryController.getallcountries);
router.route('/getallhospitals/:countryid').get( countryController.getallHospitals);
router.route('/:id').get( countryController.getcountry);
// router
//     .route('/:id')
//     .get(authController.protect, countryController.getcountry)
module.exports = router;

// authController.protect,