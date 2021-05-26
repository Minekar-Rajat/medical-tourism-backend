const Doctor = require('./../models/doctorModel')
const Treatment = require('./../models/treatmentModel')
const Hospital = require('./../models/hospitalModel')
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError');
const app = require('../app');
const mongoose = require('mongoose');
const { doc } = require('prettier');
const ObjectId = mongoose.Types.ObjectId
exports.getalldoctors = catchAsync(async(req, res, next) => {

        // EXECUTE QUERY
        const features = new APIFeatures(Doctor.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const doctors = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: doctors.length,
            data: {
                doctors,


            }
        });
    }

);
exports.getDoctor = catchAsync(async(req, res, next) => {
        console.log("hello in doctor");
        const doctor = await Doctor.findById(req.params.id).populate('Treatment', 'name').populate('review')

        // console.log("bye we found the doctor");    
        if (!doctor) {

            return next(new AppError('No Doctor found with that ID', 404));
        } else {

            res.status(200).json({
                status: 'success',
                data: {
                    doctor,

                }
            });
        }
    }

);
// exports.createDoctor = catchAsync(async(req, res, next) => {

//     // const newTour = new Tour({})
//     // newTour.save()

//     const newDoctor = await Doctor.create(req.body);

//     res.status(201).json({
//         status: 'success',
//         data: {
//             tour: newDoctor
//         }
//     });
// });

// exports.updateDoctor = catchAsync(async(req, res, next) => {

//     const updated = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     });
//     if (!updated) {
//         return next(new AppError('No Doctor found with that ID', 404));
//     }


//     res.status(200).json({
//         status: 'success',
//         data: {
//             updated
//         }
//     });
// });
exports.updateDoctor = catchAsync(async(req, res, next) => {

    // { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } },
    // { multi: true }

    const rtreat = req.body.removeTreatments
    if (rtreat) {
        console.log("in remove treatment")
        req.body.removeTreatments.forEach(async(el) => {
                await Treatment.update({ _id: el }, { $pull: { "doctor": ObjectId(req.params.id) } }, { multi: true });
                console.log("removed doctor from treatment")
            })
            // const t = await Treatment.update({ doctor: req.params.id }, { $pull: { "doctor": ObjectId(req.params.id) } })

    }
    const atreat = req.body.addTreatments;
    if (atreat) {
        console.log("in add  treatment")
        const temp = req.body.addTreatments;
        temp.forEach(async(el) => {
            await Treatment.update({ _id: el }, { $push: { "doctor": ObjectId(req.params.id) } });
            console.log("added doctor in treatment")
        })
    }
    const ahosp = (req.body.addHospital);
    if (ahosp) {
        console.log("in add hospital")
        const doctor = await Doctor.findById(req.params.id);
        if (doctor.hospital)
            await Doctor.update({ hospital: doctor.hospital }, { $pull: { "hospital": (doctor.hospital) } }, { multi: true })





        const temp = req.body.addHospital;
        temp.forEach(async(el) => {
            await Doctor.update({ _id: (doctor._id) }, { $push: { hospital: (el) } });
        })
        console.log("added doctor in hospital")

    }
    const rhosp = (req.body.removeHospital);
    if (rhosp) {
        console.log("in remove hospital")
        const doctor = await Doctor.findById(req.params.id);
        if (doctor.hospital) {
            await Doctor.update({ hospital: doctor.hospital }, { $pull: { "hospital": (doctor.hospital) } }, { multi: true });

            console.log("removed hospital")
        }

    }
    const updated = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!updated) {
        return next(new AppError('No Doctor found with that ID', 404));
    }


    res.status(200).json({
        status: 'success',
        data: {
            updated
        }
    });
});

exports.deleteDoctor = catchAsync(async(req, res, next) => {
    //we need to remove the reference from the treatment so that we wont have any kind of trouble 
    await Treatment.update({}, { $pull: { "doctor": ObjectId(req.params.id) } }, { multi: true });
    //here again we need to firstly delete all the reviews made on  particular doctor

    const deleted = await Doctor.deleteOne({ _id: req.params.id })

});

exports.providingthistreatment = catchAsync(async(req, res, next) => {

    const treatment = await Treatment.findById(req.params.treatment);
    const temp = await Doctor.find({ _id: treatment.doctor }).populate('Treatment', 'name');
    if (!temp) {
        return next(new AppError('no doctor provide this kind of treatment', 400));
    }

    res.status(200).json({
        results: temp.length,
        status: 'success',
        data: temp
    });
});