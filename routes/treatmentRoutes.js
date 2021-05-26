const express = require('express');
const TreatmentController = require('./../controllers/treatmentController');
const authController = require('./../controllers/authController');
const router = express.Router();



router.route('/getid')
    .post(TreatmentController.getallids);
router.route('/')
    .get(TreatmentController.getallTreatments)
    .post( TreatmentController.createTreatment);
router.route('/:id/countries')
    .get(TreatmentController.getCountries)
router.route('/:id/country/:countryid')
    .patch(TreatmentController.updatePriceinCountry)
router.route('/compare/:id')
    .get(TreatmentController.compareCountries)

router
    .route('/options/:id')
    .get(TreatmentController.getTreatment)
    .delete( TreatmentController.deleteTreatment);
module.exports = router;
// authController.protect, authController.restrictTo('admin'),