const User = require('./../models/usermodel');
const Doctor = require('./../models/doctorModel');
const Treatment = require('./../models/treatmentModel');
const jwt = require('jsonwebtoken');
const Apperror = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const express = require('express');
const crypto = require('crypto');
const { promisify } = require('util');
// const sendEmail = require('./../utils/email');
// const signToken = id => {
//     return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
// }



// const createSendToken = (doctor, statusCode, res) => {
//     const token = signToken(doctor.id)
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
//     doctor.password = undefined; //here while creating we wil see the users password so we need to undefined it




// }

exports.signupDoctor = catchAsync(async(req, res, next) => {
    const newDoctor = await Doctor.create({
        name: req.body.name,
        email: req.body.email,
        
        photo: req.body.photo,
        experience: req.body.experience,
        location: req.body.location,
        fees: req.body.fees,
        education:req.body.education,
        lang: req.body.lang,
        
        edu: req.body.edu,



    });
    const temp = req.body.Treatment;
    console.log(temp);

    if (!temp) {
       
        return;
    }
    // console.log(newHospital._id)
    // console.log(t);
    
    temp.forEach(async(el) => {  
        // await Treatment.update({ _id: el }, { $push: { doctor: newDoctor._id } });
            const treat =await Treatment.find({name:el})
            // console.log(treat);
            await Treatment.update({ _id: treat[0]._id }, { $push: { doctor: newDoctor._id } });
        // await Treatment.update({ _id: treat[0]._id }, { $push: { hospital: newHospital._id, country: { countryid: t[0]._id } } });
        // await Treatment.update({ _id: el }, { $push: {  } });
    })
    // await Treatment.update({ _id: temp }, { $push: { doctor: newDoctor._id } });
    const hospital = req.body.hospital;
    console.log(hospital);
    if(hospital) await Doctor.update({ _id: this._id }, { $push: { hospital: hospital._id } });
        res.status(201).json({
        status: "success",
        
        data: {
            newDoctor
        }

    });
    newDoctor.save();
    // createSendToken(newDoctor, 201, res);

    //here  in create we have not used req.body only bcoz  it will create 
    // a security flaw by giving right to the user to become whichever role user wants


});


// exports.loginDoctor = catchAsync(async(req, res, next) => {
//     const { email, password } = req.body;

//     //checking if email and password actually exists
//     if (!email || !password) {
//         return next(new Apperror('please provide email and password', 400));

//     }
//     //checking if user exists
//     const doctor = await Doctor.findOne({ email }).select('+ password')


//     if (!doctor || !await doctor.correctPassword(password, doctor.password)) {
//         return next(new Apperror('incorrect email or password', 401));
//     }
//     //if everything is ok,send token to the client
//     createSendToken(doctor, 200, res);
//     //req.doctor = doctor;

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
//         // var currentUser;
//         // console.log(req.user);
//         // if (req.user.role === 'admin') {
//     const currentUser = await Doctor.findById(decoded.id);
//     // } else if (req.doctor.role === 'doctor') {
//     //     currentUser = await Doctor.findById(decoded.id);
//     // }

//     if (!currentUser) {
//         return next(new Apperror('Denied Route', 401));
//     }

//     //check if  user changed password after token was issued
//     if (currentUser.changedPasswordAfter(decoded.iat)) {
//         return next(new Apperror('The user recently changed the password please login again', 401));
//     }
//     //req.doctor = currentUser; //used for future use
//     req.doctor = currentUser;

//     next();

//     // else {
//     //     return next(new Apperror('invalid access to this doctor protect route', 400));
//     // }
// });
//we usually cant pass the arguments in the middlewarefunction
// exports.restrictTo = (...roles) => {
//     return (req, res, next) => {
//         console.log(req.user);
//         if (req.user) {
//             console.log("hi");
//             if ((req.user.role) === 'admin') next();
//             else {
//                 return next(new Apperror('you do not have permission to perform this operation', 403));
//             }

//         } else if (req.hospital) {
//             return next(new Apperror('you do not have permission to perform this operation', 403));
//         } else if (!roles.includes(req.doctor.role)) {
//             return next(new Apperror('you do not have permission to perform this operation', 403));
//         }
//         next();

//         //roles is an array
//     };
// };

// exports.forgotPasswordDoctor = catchAsync(async(req, res, next) => {
//     // 1) Get user based on POSTed email
//     const doctor = await Doctor.findOne({ email: req.body.email });
//     if (!doctor) {
//         return next(new Apperror('There is no doctor with email address.', 404));
//     }

//     // 2) Generate the random reset token
//     const resetToken = doctor.createPasswordResetToken();
//     await doctor.save({ validateBeforeSave: false });

//     // 3) Send it to user's email
//     const resetURL = `${req.protocol}://${req.get(
//       'host'
//     )}/doctor/resetPassword/${resetToken}`;

//     const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

//     try {
//         await sendEmail({
//             email: doctor.email,
//             subject: 'Your password reset token (valid for 10 min)',
//             message
//         });

//         res.status(200).json({
//             status: 'success',
//             message: 'Token sent to email!'
//         });
//     } catch (err) {
//         doctor.passwordResetToken = undefined;
//         doctor.passwordResetExpires = undefined;
//         await doctor.save({ validateBeforeSave: false });

//         return next(
//             new Apperror('There was an error sending the email. Try again later!'),
//             500
//         );
//     }
// });

// exports.resetPassword = catchAsync(async(req, res, next) => {
//     //get user based on the token 

//     const hashToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
//     const doctor = await Doctor.findOne({ passwordResetToken: hashToken, passwordResetExpires: { $gt: Date.now() } })


//     //if token has not expired and there is user set the new password
//     if (!doctor) {
//         return next(new Apperror('token is invalid or has expired', 400));
//     }
//     doctor.password = req.body.password;
//     doctor.passwordConfirm = req.body.passwordConfirm;
//     doctor.passwordResetToken = undefined,
//         doctor.passwordResetExpires = undefined;
//     //here we want the validators to check the details so we will write .save();
//     await doctor.save();

//     //update the changepasswordat property for the user
//     //this is done by the middleware function we created
//     //log in the user and send the JWT
//     createSendToken(doctor, 200, res);

// });

// exports.updatePassword = catchAsync(async(req, res, next) => {
//     //get the user 
//     const doctor = await Doctor.findById(req.doctor.id).select('+password');
//     if (!doctor) {
//         return next(new Apperror('no doctor with this id'), 400);
//     }
//     //check if the current password is correct

//     if (!(await doctor.correctPassword(req.body.passwordCurrent, doctor.password))) {
//         return next(new Apperror('your current password is wrong'), 401);
//     }

//     //if so update the password 

//     doctor.password = req.body.password;
//     doctor.passwordConfirm = req.body.passwordConfirm
//     await doctor.save();
//     //log user in ,send JWT
//     createSendToken(doctor, 200, res);

// });