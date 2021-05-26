const mongoose = require("mongoose");
const validator = require('validator');
const treatmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a treatment must have a name'],
        unique: true

    },
    hospital: [{
        type: mongoose.Schema.ObjectId,
        ref: 'hospital',
        index: true,
        // unique: true,
        sparse: true


    }],
    doctor: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor',
        index: true,
        unique: true,
        sparse: true


    }],
    country: [{
        countryid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Country',
            index: true,

            sparse: true

        },
        price: {
            type: Number,
            validate: [validator.isNumeric, 'Please provide a valid value'],
            min: 0,
            default: 0

        }


    }]



});
const Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = Treatment;
// treatmentSchema.pre(/^find/, function(next) {

//     // this.populate({
//     //         path: 'hospital',
//     //         select: 'name'
//     //     })
//     // populate({
//     //         path: 'hospital',
//     //         select: 'name'
//     //     })
//     // .populate({
//     //     path: 'doctor',
//     //     select: 'name'
//     // })

//     next();
// })

// $and: [
//     { type: { _id: ObjectId(req.params.id) } },
//     { type: { country: { price: { $gt: 1 } } } }

// ]