const Treatment = require('./../models/treatmentModel')
const Country = require('./../models/countryModel')
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;



exports.createTreatment = catchAsync(async(req, res, next) => {
    const newTreatment = await Treatment.create({
        name: req.body.name,
    });

    res.status(200).json({
        status: 'success'
    })



});

exports.deleteTreatment = catchAsync(async(req, res, next) => {
    const del = await Treatment.deleteOne({
        _id: req.params.id
    });
    if (!del) {
        return next(new AppError('There was some problem while Deleting. Delete after some time', 500));
    }
    res.status(200).json({
        status: 'success'
    })



});
exports.getallTreatments = catchAsync(async(req, res, next) => {

        // EXECUTE QUERY
        const features = new APIFeatures(Treatment.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const treatment = await features.query;
        // hospitals.
        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: treatment.length,
            data: {
                treatment
            }
        });
    }

);
exports.getTreatment = catchAsync(async(req, res, next) => {

        const treatment = await Treatment.findById(req.params.id)

        if (!treatment) {

            return next(new AppError('No treatment found with that ID', 404));
        } else {

            res.status(200).json({
                status: 'success',
                data: {
                    treatment


                }
            });
        }
    }

);



exports.getCountries = catchAsync(async(req, res, next) => {

    const treatment = await Treatment.findById(req.params.id);

    console.log(treatment.country);
    console.log('......');
    var c = [];
    treatment.country.forEach(el => {

        c.push(el.countryid);
    });



    const temp = await Country.find({ _id: c });
    if (!temp) {
        return next(new AppError('no country have this kind of treatment', 400));
    }

    res.status(200).json({
        results: temp.length,
        status: 'success',
        data: temp
    });
});
exports.updatePriceinCountry = catchAsync(async(req, res, next) => {
    // console.log(req.params.id);
    const treatment = await Treatment.findOneAndUpdate({ "_id": req.params.id, "country.countryid": req.params.countryid }, {
            "$set": {
                "country.$.price": req.body.price
            }
        },

    );
    if (!treatment) {
        return next(new AppError('cant find the country', 400));
    }

    console.log(treatment.country);
    console.log('......');



    res.status(200).json({

        status: 'success',
        data: treatment
    });

});
exports.compareCountries = catchAsync(async(req, res, next) => {
    //const tret = await Treatment.findById(req.params.id)
    const t = await Treatment.findById(req.params.id);

    const treatment = await Treatment.aggregate([{
            $match: {
                _id: ObjectId(req.params.id),

            }
        },
        {
            $unwind: '$country'
        },

        {
            $match: {
                'country.price': { $gt: 0 }
            }
        },
        {
            $sort: {
                "country.price": 1
            }
        },
        {
            $project: {
                price: '$country.price',
                countryid: '$country.countryid',
                _id: '$country._id'
            }
        }
    ]);



    res.status(200).json({
        status: 'success',
        data: treatment
    });
});

const datawewant = async(t)=>{
    console.log(t);
    const temp1 = await Treatment.find({name:t});
    return temp1[0]._id
    
}
exports.getallids=async(req,res,next)=>{ 
    const temp = req.body.treatment;
   const requests = temp.map((t)=>{
       return datawewant(t).then((a)=>{
           return a;

       })

   })
   return Promise.all(requests).then((a)=>{
    //    console.log(JSON.stringify(a))
       res.status(200).json({
        status: 'success',
        data:a
    })
   });
   
   
//     let requests = temp.map((t) => Treatment.find({name:t}));
//     Promise.all(requests)
//   .then(responses => {
    
//         for(let response of responses) {
//             alert(`${response.url}: ${response.status}`); // shows 200 for every url
//           }
       
    
  
//   return responses;
// }
//   ).then(responses => Promise.all(responses.map(r => r.data.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then(users => users.forEach(user => console.log(user)));
    res.status(200).json({
        status: 'success',
        data:treatid
    })

}









// exports.updatehospitalDoctors = catchAsync(async(req, res, next) => {

//     // const newTour = new Tour({})
//     // newTour.save()

//     const Hospital = await hospital.findById(req.params.hospitalid);
//     Hospital.doctors = req.body.doctors;
//     res.status(201).json({
//         status: 'success',
//         data: {
//             tour: Hospital
//         }
//     });
//     Hospital.save({ validateBeforeSave: false });
// });
// exports.updatehospitalTreatments = catchAsync(async(req, res, next) => {

//     // const newTour = new Tour({})
//     // newTour.save()

//     const Hospital = await hospital.findById(req.params.hospitalid);
//     //console.log(Hospital);

//     Hospital.treatments = req.body.treatments;
//     //console.log(Hospital.treatments, req.body.treatments);
//     res.status(201).json({
//         status: 'success',
//         data: {
//             tour: Hospital
//         }
//     });
//     Hospital.save({ validateBeforeSave: false });
// });

// exports.updateHospital = catchAsync(async(req, res, next) => {
//     // const temp = await  hospital.findById(req.params.id).populate('doctors');
//     if (req.body.doctors) {
//         return next(new AppError('invalid route for updating/adding the doctors', 400));
//     }
//     const updated = await hospital.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     }).populate('doctors');
//     if (!updated) {
//         return next(new AppError('No Hospital found with that ID', 404));
//     }


//     res.status(200).json({
//         status: 'success',
//         data: {
//             updated
//         }
//     });
// });

// exports.deleteHospital = catchAsync(async(req, res, next) => {

//     await hospital.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//         status: 'success',
//         data: null
//     });
// });
// exports.havingthisTreatment = catchAsync(async(req, res, next) => {

//     const hospitals = await hospital.find({ treatments: (req.params.treatment) });
//     if (!hospitals) {
//         return next(new AppError('no hospital have this kind of treatment', 400));
//     }

//     res.status(200).json({
//         status: 'success',
//         data: hospitals
//     });
// });