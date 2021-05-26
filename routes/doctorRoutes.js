const express = require('express');
const doctorController = require('./../controllers/doctorController');
const router = express.Router();
const authController = require('./../controllers/authController')
const authControllerDoctor = require('./../controllers/authControllerDoctor')



router.post('/signupDoctor', authControllerDoctor.signupDoctor);
// router.post('/loginDoctor', authControllerDoctor.loginDoctor);
// router.post('/forgotPasswordDoctor', authControllerDoctor.forgotPasswordDoctor);
// router.patch('/resetPassword/:token', authControllerDoctor.resetPassword);
// router.patch('/updateMyPassword', authControllerDoctor.protect, authControllerDoctor.updatePassword)
router.route('/getalldoctors').get(doctorController.getalldoctors);
router.route('/providingthistreatment/:treatment').get(doctorController.providingthistreatment)


router
    .route('/:id')
    .get(doctorController.getDoctor)
    .patch( doctorController.updateDoctor)
    .delete(  doctorController.deleteDoctor);
module.exports = router;

// .patch(authControllerDoctor.protect, authControllerDoctor.restrictTo('doctor', 'admin'), doctorController.updateDoctor)
//     .delete(authControllerDoctor.protect, authControllerDoctor.restrictTo('doctor', 'admin'), doctorController.deleteDoctor);