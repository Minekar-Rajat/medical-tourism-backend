const hospital = require('./../models/hospitalModel')
const Treatment = require('./../models/treatmentModel')
const Doctor = require('./../models/doctorModel')
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError');
const Country = require('../models/countryModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
exports.getallHospitals = catchAsync(async(req, res, next) => {

        // EXECUTE QUERY
        const features = new APIFeatures(hospital.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const hospitals = await features.query;
        // hospitals.
        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: hospitals.length,
            data: {
                hospitals
            }
        });
    }

);
exports.getHospital = catchAsync(async(req, res, next) => {
        //const doctors = await Doctor.find({ 'hospital': req.params.id });
    //    console.log(req.params.id);
        // var myId = JSON.parse();
            const currentHospital = await hospital.findById( ObjectId( (req.params.id) ))
            console.log(currentHospital);
            if (!currentHospital) {
                return next(new AppError('No hospital found with that ID', 404));
            } else {
    
                res.status(200).json({
                    status: 'success',
                    data: {
                        currentHospital
                    }
                });
            }
       
        }

    

);


exports.updateHospital = catchAsync(async(req, res, next) => {
    // const temp = await  hospital.findById(req.params.id).populate('doctors');
    // if (req.body.doctors) {
    //     return next(new AppError('invalid route for updating/adding the doctors', 400));
    // } 


    //1) firstly we will perform addition of doctors in the database
    // !!here we are only adding those doctors whose doctor.hospital is null
    //that is basically meant to be available for working in any hospital
    //so the array we will get from frontend will contain only those doctors who are available



    const temp = req.body.addDoctors;
    if (temp) {
        temp.forEach(async(el) => { 
            console.log(typeof(el));
            await Doctor.update({ _id: ObjectId(el) }, { $push: { hospital: ObjectId(req.params.id) } });
        })
    }
    // const Hospital = await hospital.findById(req.params.hospitalid);

    // 2) removing the doctors from the hospitals 
    // !!here we are removing those doctors whose doctor.hospital is specified id
    // from frontend we will get the array of doctors which hospital admin want to remove

    const rem = req.body.removeDoctors;
    if (rem) {
        rem.forEach(async(el) => {
            await Doctor.update({ _id: el }, { $pull: { hospital: ObjectId(req.params.id) } });
        })
    }

    //3)add treatments into the hospital 
    //!!here  we will be adding treatments into the hospital which are previously not added by hospital for their specific purpose
    //from frontend we will get array of treatments in which this hospital id is not there 
    const Hospital = await hospital.findById(req.params.id);
    //console.log(Hospital);
    const countryname = Hospital.country_name;
    //console.log(countryname);
    const t = await Country.find({ name: countryname });



    const treat = req.body.addTreatments;
    if (treat) {
        //here we are adding hospital id into the treatment document
        //here we need to add the country id in treatment document also as it is basically working as signup for hospital with given treatment
        //so that we would not have problem while removing hospital id from treatment and at the same time
        //removing respective  countryid of that hospital
        treat.forEach(async(el) => {
            await Treatment.update({ _id: el }, { $push: { hospital: ObjectId(req.params.id) } });
            await Treatment.update({ _id: el }, { $push: { country: { countryid: t[0]._id } } });
        })



    }

    //4) remove treatments from hospital
    //!here we will remove treatments from the hospital which they don't want in there hospital
    //from frontend we will get an array of treatments which are basically from the treatments exists in this hospital

    const rtreat = req.body.removeTreatments;
    //removing corresponding countryid as when we delete the hospital
    //const hspt = await hospital.findById(req.params.id);
    const countrynameid = await Country.find({ name: Hospital.country_name });
    //console.log(c[0]._id);
    if (rtreat) {
        rtreat.forEach(async(el) => {
            await Treatment.update({ _id: el }, { $pull: { hospital: ObjectId(req.params.id) } });
            const del = await Treatment.findById({ _id: el });
            console.log(del);

            var idx = del.country.findIndex(c => (c.countryid.toString() === (countrynameid[0]._id).toString()) && c.price == 0)

            if (idx == '-1') {
                idx = del.country.findIndex(c => (c.countryid.toString() === (countrynameid[0]._id).toString()) && c.price != 0)
            }
            del.country.splice(idx, 1);
            del.save({ validateBeforeSave: false });


        })





    }
    //5)after major updations rest code will just update the details of the hospital

    const updated = await hospital.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!updated) {
        return next(new AppError('No Hospital found with that ID..', 404));
    }


    res.status(200).json({
        status: 'success',
        data: {
            updated
        }
    });
});

exports.deleteHospital = catchAsync(async(req, res, next) => {


    //removing corresponding countryid as when we delete the hospital
    const hspt = await hospital.findById(req.params.id);
    const countrynameid = await Country.find({ name: hspt.country_name });
    //console.log(c[0]._id);

    const del = await Treatment.find({
        "hospital": ObjectId(req.params.id)
    })
    console.log(del);
    del.forEach(el => {
            var idx = el.country.findIndex(c => (c.countryid.toString() === (countrynameid[0]._id).toString()) && c.price == 0)

            if (idx == '-1') {
                idx = el.country.findIndex(c => (c.countryid.toString() === (countrynameid[0]._id).toString()) && c.price != 0)
            }
            el.country.splice(idx, 1);
            el.save({ validateBeforeSave: false });
        })
        //console.log(del);


    // const tr = 0;
    // if (!del) {
    //     tr = await Treatment.updateOne({
    //         $and: [{ "country.countryid": ObjectId(c[0]._id) }, { "hospital": ObjectId(req.params.id) }]
    //     }, { $pull: { country: { countryid: ObjectId(c[0]._id) } } }, { multi: false });
    // }


    //here we cant use the deleteone method as it is basically deleting the document so it is not right as data is getting lost
    //so we can use deleteone for deleting reviews 
    const deleted = await hospital.deleteOne({ _id: req.params.id })

    //so we need to go to every model this hospital model is referenced and remove the  hospital id from them via $pull operator 
    //so here hospital model is referenced to treatment,doctor 
    //1)removing referencing from treatment  

    await Treatment.update({}, { $pull: { hospital: ObjectId(req.params.id) } }, { multi: true });


    //2)removing referencing from doctor 
    await Doctor.update({}, { $pull: { hospital: ObjectId(req.params.id) } }, { multi: true });

    res.status(204).json({
        status: 'successfully deleted the data'

    });

});
exports.havingthisTreatment = catchAsync(async(req, res, next) => {


    const treatment = await Treatment.findById(req.params.treatment);
    const temp = await hospital.find({ _id: treatment.hospital }).populate('review', 'name');
    if (!temp) {
        return next(new AppError('no Hospital have this kind of treatment', 400));
    }

    res.status(200).json({
        results: temp.length,
        status: 'success',
        data: temp
    });
});
// exports.updatehospitalDoctors = catchAsync(async(req, res, next)) => {
//     res.status(201).json({
//         status: 'success',

//     });
// };
// exports.updatehospitalDoctors = catchAsync(async(req, res, next) => {

//     // const newTour = new Tour({})
//     // newTour.save()


//     // req.body.Doctor;
//     const temp = req.body.doctors;
//     temp.forEach(async(el) => {
//         await Doctor.update({ _id: el }, { $push: { hospital: ObjectId(req.params.hospitalid) } });
//     })
//     const Hospital = await hospital.findById(req.params.hospitalid);
//     // console.log(Hospital);
//     // Hospital.save({ validateBeforeSave: false });
//     //console.log(Hospital.Doctor);
//     res.status(201).json({
//         status: 'success',
//         data: {
//             Hospital
//         }
//     });
//     //

// });
// exports.updatehospitalTreatments = catchAsync(async(req, res, next) => {

//     // const newTour = new Tour({})
//     // newTour.save()



//     const temp = req.body.treatments;
//     temp.forEach(async(el) => {
//         const t = await Treatment.findByIdAndUpdate(el, { hospital: req.params.hospitalid });
//     })
//     const Hospital = await hospital.findById(req.params.hospitalid);
//     // console.log(Hospital);
//     // console.log(typeof(req.body.treatments));
//     // console.log(typeof(Hospital.Treatment));
//     // console.log(Hospital.Treatment, req.body.treatments);
//     res.status(201).json({
//         status: 'success',
//         data: {
//             tour: Hospital
//         }
//     });
//     Hospital.save({ validateBeforeSave: false });
// });

// exports.addtreatments = catchAsync(async(req, res, next) => {


//     // this.country_name = this.country_name.toLowerCase();
//     //     const t = await Country.find({ name: this.country_name });
//     //     this.treatments.forEach(async(el) => {
//     //         await Treatment.update({ _id: el }, { $push: { hospital: this._id, country: { countryid: t[0]._id } } });
//     const t = await hospital.findById(req.params.id);
//     const tt = await Country.find({ name: t.country_name });
//     const temp = req.body.treatments;
//     temp.forEach(async(el) => {
//         await Treatment.update({ _id: el }, {
//             $push: { hospital: req.params.id },
//             country: { countryid: tt[0]._id }
//         });

//     })

//     res.status(200).json({
//         results: temp.length,
//         status: 'success',
//         data: temp
//     });
// });