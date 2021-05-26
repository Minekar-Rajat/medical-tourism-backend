//const User = require('./../models/usermodel');
const Hospital = require('./../models/hospitalModel');
const Doctor = require('./../models/doctorModel');
const jwt = require('jsonwebtoken');
const Apperror = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const express = require('express');
const crypto = require('crypto');
const Country = require('./../models/countryModel')
const sendEmail = require('./../utils/email');
const Treatment = require('../models/treatmentModel');
const ObjectId = require('mongodb').ObjectID;
// const signToken = id => {
//     return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
// }



// const createSendToken = (hospital, statusCode, res) => {
//     const token = signToken(hospital.id)
//         // console.log("hello ji");
//     const cookieOptions = {
//         expires: new Date(Date.now + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
//         secure: false,
//         HttpOnly: true
//     };

//     if (process.env.NODE_ENV === 'production') {
//         cookieOptions.secure = true;
//         // console.log("sas ri aakaal");
//     }
//     res.cookie('jwt', token, cookieOptions);
//     hospital.password = undefined; //here while creating we wil see the users password so we need to undefined it

//     res.status(statusCode).json({
//         status: "success",
//         token,
//         data: {
//             hospital,

//         }

//     });


// }

exports.signupHospital = catchAsync(async(req, res, next) => { 
    // console.log(req.body);
    const newHospital = await Hospital.create({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password,
        // passwordConfirm: req.body.passwordConfirm,
        photo: req.body.photo,
        about: req.body.about,
        country_name: req.body.country_name,
        // rating: req.body.rating,
        location: req.body.location



    });
    //adding country id into treatment for further comparison purpose
    const countryname = req.body.country_name;
    //console.log(countryname);
    const t = await Country.find({ name: countryname });
    // console.log(t);
    //for adding the hospital id in the treatment
    const temp = req.body.treatments;
// console.log(typeof(ObjectId(temp[0])));
    
    // console.log(newHospital._id)
    // console.log(t);
    
    temp.forEach(async(el) => {  
        
            const treat =await Treatment.find({_id:ObjectId(el)})
            // console.log(treat);
        await Treatment.update({ _id: treat[0]._id }, { $push: { hospital: newHospital._id, country: { countryid: t[0]._id } } });
        // await Treatment.update({ _id: el }, { $push: {  } });
    })

    // const doctor = req.body.doctors;
    // // console.log(doctor)
    
    // doctor.forEach(async(el) => { 
    //     const doc =await Doctor.find({_id:ObjectId(el)})
    //     // console.log(doc);
    //     await Doctor.update({ _id: doc[0]._id }, { $push: { hospital: newHospital._id } });
    // })

    res.status(201).json({
                status: "success",
               
                data: {
                    newHospital
        
                }
        
            });
    // createSendToken(newHospital, 201, res);
    //here  in create we have not used req.body only bcoz  it will create 
    // a security flaw by giving right to the user to become whichever role user wants
});


// exports.loginHospitalAdmin = catchAsync(async(req, res, next) => {
//     const { email, password } = req.body;

//     //checking if email and password actually exists
//     if (!email || !password) {
//         return next(new Apperror('please provide email and password', 400));

//     }
//     //checking if user exists
//     const hospital = await Hospital.findOne({ email }).select('+ password')


//     if (!hospital || !await hospital.correctPassword(password, hospital.password)) {
//         return next(new Apperror('incorrect email or password', 401));
//     }
//     //if everything is ok,send token to the client
//     createSendToken(hospital, 200, res);

//     // next();
// });

// exports.protect = catchAsync(async(req, res, next) => {
//     let token;
//     //get the token and check it is there
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         token = req.headers.authorization.split(' ')[1];

//     }
//     //  console.log(token);
//     if (!token) {
//         return next(new Apperror('you are not logged in!!', 401));
//     }
//     //validate the token

//     const decoded = await (jwt.verify(token, process.env.JWT_SECRET))
//         // console.log(decoded);
//         //check user still exists

//     const hospital = await Hospital.findById(decoded.id);

//     if (!hospital) {
//         return next(new Apperror('Denied Route', 401));
//     }

//     //check if  user changed password after token was issued
//     if (hospital.changedPasswordAfter(decoded.iat)) {
//         return next(new Apperror('The doctor recently changed the password please login again', 401));
//     }
//     req.hospital = hospital; //used for future use
//     next();
// });
// //we usually cant pass the arguments in the middlewarefunction
// exports.restrictTo = (...roles) => {
//     return (req, res, next) => {

//         if (req.user) {
//             console.log("hi");
//             if ((req.user.role) === 'admin') next();
//             else {
//                 return next(new Apperror('you do not have permission to perform this operation', 403));
//             }

//         } else if (req.doctor) {
//             return next(new Apperror('you do not have permission to perform this operation', 403));
//         } else if (!roles.includes(req.hospital.role)) {
//             return next(new Apperror('you do not have permission to perform this operation', 403));
//         }
//         next();

//         //roles is an array
//     };
// };

// exports.forgotPasswordHospitalAdmin = catchAsync(async(req, res, next) => {
//     // 1) Get user based on POSTed email
//     const hospital = await Hospital.findOne({ email: req.body.email });
//     if (!hospital) {
//         return next(new Apperror('There is no hospital with email address.', 404));
//     }

//     // 2) Generate the random reset token
//     const resetToken = hospital.createPasswordResetToken();
//     await hospital.save({ validateBeforeSave: false });

//     // 3) Send it to user's email
//     const resetURL = `${req.protocol}://${req.get(
//       'host'
//     )}/hospital/resetPassword/${resetToken}`;

//     const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

//     try {
//         await sendEmail({
//             email: hospital.email,
//             subject: 'Your password reset token (valid for 10 min)',
//             message
//         });

//         res.status(200).json({
//             status: 'success',
//             message: 'Token sent to email!'
//         });
//     } catch (err) {
//         hospital.passwordResetToken = undefined;
//         hospital.passwordResetExpires = undefined;
//         await hospital.save({ validateBeforeSave: false });

//         return next(
//             new Apperror('There was an error sending the email. Try again later!'),
//             500
//         );
//     }
// });

// exports.resetPassword = catchAsync(async(req, res, next) => {
//     //get user based on the token 

//     const hashToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
//     const hospital = await Hospital.findOne({ passwordResetToken: hashToken, passwordResetExpires: { $gt: Date.now() } })


//     //if token has not expired and there is user set the new password
//     if (!hospital) {
//         return next(new Apperror('token is invalid or has expired', 400));
//     }
//     hospital.password = req.body.password;
//     hospital.passwordConfirm = req.body.passwordConfirm;
//     hospital.passwordResetToken = undefined,
//         hospital.passwordResetExpires = undefined;
//     //here we want the validators to check the details so we will write .save();
//     await hospital.save();

//     //update the changepasswordat property for the user
//     //this is done by the middleware function we created
//     //log in the user and send the JWT
//     createSendToken(hospital, 200, res);

// });

// exports.updatePassword = catchAsync(async(req, res, next) => {
//     //get the user 
//     if (req.hospital) {
//         return next(new Apperror('invalid access the route'), 400);
//     }
//     const hospital = await Hospital.findById(req.hospital.id).select('+password');
//     if (!hospital) {
//         return next(new Apperror('no hospital with this id'), 400);
//     }
//     //check if the current password is correct

//     if (!(await hospital.correctPassword(req.body.passwordCurrent, hospital.password))) {
//         return next(new Apperror('your current password is wrong'), 401);
//     }

//     //if so update the password 

//     hospital.password = req.body.password;
//     hospital.passwordConfirm = req.body.passwordConfirm
//     await hospital.save();
//     //log user in ,send JWT
//     createSendToken(doctor, 200, res);

// });