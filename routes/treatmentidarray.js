const express = require('express');
const TreatmentController = require('./../controllers/treatmentController');
const authController = require('./../controllers/authController');
const router = express.Router();



    
module.exports = router;
// authController.protect, authController.restrictTo('admin'),