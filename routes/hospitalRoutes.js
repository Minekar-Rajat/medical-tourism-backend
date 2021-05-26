const express = require('express');
const hospitalController = require('./../controllers/hospitalController');
const router = express.Router();
const authController = require('./../controllers/authController')
const authControllerHospital = require('./../controllers/authControllerHospital')

router
    .route('/get/:id')
    .get(hospitalController.getHospital)
    .patch( hospitalController.updateHospital)
    .delete(  hospitalController.deleteHospital);

//authorization and authentication
router.post('/signup', authControllerHospital.signupHospital);
// router.post('/login', authControllerHospital.loginHospitalAdmin);
// router.post('/forgotPassword', authControllerHospital.forgotPasswordHospitalAdmin);
// router.patch('/resetPassword/:token', authControllerHospital.resetPassword);
// router.patch('/updateMyPassword',  authControllerHospital.updatePassword)

// authControllerHospital.protect,
//routes for the hospital module
router.route('/getallHospitals').get(hospitalController.getallHospitals);


router.route('/havingthistreatment/:treatment').get(hospitalController.havingthisTreatment);
module.exports = router;
// .patch(authControllerHospital.protect, authControllerHospital.restrictTo('Hospital-Admin', 'admin'), hospitalController.updateHospital)
//     .delete(authControllerHospital.protect, authControllerHospital.restrictTo('Hospital-Admin', 'admin'), hospitalController.deleteHospital);

//router.route('/:hospitalid/doctor').patch(hospitalController.updatehospitalDoctors)
//router.route('/:hospitalid/treatment').patch(hospitalController.updatehospitalTreatments)
//router.post('/:id/addtreatments', hospitalController.addtreatments);
// router.patch('/updateMe', authController.protect, hospitalController.updateMe);
// router.delete('/deleteMe', authController.protect, hospitalController.deleteMe);