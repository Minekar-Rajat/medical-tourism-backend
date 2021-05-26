const mongoose = require("mongoose");
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { stringify } = require('json5');
const Treatment = require('./../models/treatmentModel')
const Country = require('./../models/countryModel')

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a Hospital must have a name'],
        unique: true

    },
    country_name: {
        type: String,
        required: [true, 'a Hospital must have a country name']

    },
    location: {
        type: String,
        required: [true, "Hospital's location is needed"]


    },

    about: {
        type: String,
        required: [true, "Hospital's description is necessary "]

    },

    photo: {
        type: String
    },

    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // },
    email: {
        type: String,
        // required: [true, 'Please provide the email'],
        // unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },

    // role: {
    //     type: String,

    //     default: 'Hospital-Admin'
    // },
    // password: {
    //     type: String,
    //     required: [true, 'please provide a password'],
    //     minlength: 8,
    //     select: false //this will not be seen in the output but it will be in the database
    // },
    // passwordConfirm: {
    //     type: String,
    //     required: [true, 'Please confirm your password'],
    //     validate: {
    //         validator: function(password) {
    //             return password === this.password
    //         },
    //         message: 'Passwords are not same!'
    //     }

    // },
    // passwordChangedAt: Date,
    // passwordResetToken: String,
    // passwordResetExpires: Date,
    // active: {
    //     type: Boolean,
    //     default: true,
    //     select: false
    // },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0']

    }





}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

HospitalSchema.virtual('review', {
    ref: 'review',
    foreignField: 'hospital',
    localField: '_id'


});
HospitalSchema.virtual('Treatment', {
    ref: 'Treatment',
    foreignField: 'hospital',
    localField: '_id'


});
HospitalSchema.virtual('Doctor', {
    ref: 'Doctor',
    foreignField: 'hospital',
    localField: '_id'


});
HospitalSchema.pre(/^find/, function(next) {

    this.populate({
        path: 'Treatment',
        select: 'name'
    }).
    populate({
            path: 'review',
            select: 'name'
        })
        .populate({
            path: 'doctor',
            select: 'name'
        })

    next();
})
// HospitalSchema.pre('save', async function(next) {
//         //only run this function if password is actually modified 
//         if (!this.isModified('password')) return next();
//         //hasing the password with cost of 12 (salt string)
//         this.password = await bcrypt.hash(this.password, 12);
//         //delete this field as we dnt want in the database
//         this.passwordConfirm = undefined;
//         next();

//     })
    // HospitalSchema.pre('save', async function(next) {
    //     this.country_name = this.country_name.toLowerCase();
    //     const t = await Country.find({ name: this.country_name });
    //     this.treatments.forEach(async(el) => {
    //         await Treatment.update({ _id: el }, { $push: { hospital: this._id, country: { countryid: t[0]._id } } });

//         // await Treatment.update({ _id: el }, { $push: {  } });


//     })
//     next();

// })
HospitalSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'Treatment',
        select: 'name'
    }).populate({
        path: 'Doctor',
        select: 'name'
    }).populate({
        path: 'review',
        select: 'review'
    })

    this.populate({
        path: 'user',
        select: 'name photo'
    });
    next();
});
// HospitalSchema.pre(/^find/, function(next) {
//     // this points to the current query
//     // this.find({ active: { $ne: false } });
//     next();
// });
// HospitalSchema.pre('save', function(next) {
//     if (!this.isModified('password') || this.isNew) {
//         return next();
//     }
//     this.passwordChangedAt = Date.now() - 1000;
//     //to execute smoothly we subtract 1sec
//     next();
// });
// HospitalSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
//     //  this.password will not be available ass password is not available
//     return await bcrypt.compare(candidatePassword, userPassword);
// }
// HospitalSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
//     if (this.passwordChangedAt) {
//         //console.log(this.passwordChangedAt, JWTTimestamp);
//         const changedTimeStamp = parseInt((this.passwordChangedAt.getTime() / 1000), 10);
//         return (changedTimeStamp > JWTTimestamp);

//     }
//     //false means not changed
//     return false;
// }
// HospitalSchema.methods.createPasswordResetToken = function() {
//     const resetToken = crypto.randomBytes(32).toString('hex');

//     this.passwordResetToken = crypto
//         .createHash('sha256')
//         .update(resetToken)
//         .digest('hex');

//     console.log({ resetToken }, this.passwordResetToken);

//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

//     return resetToken;
// };
HospitalSchema.pre('deleteOne', function(next) {
    const hospitalid = this.getQuery()["_id"];
    mongoose.model("review").deleteMany({ 'hospital': hospitalid }, function(err, result) {
        if (err) {
            console.log(`[error] ${err}`);
            next(err);
        } else {
            console.log('success');
            next();
        }
    });
});

const hospital = mongoose.model('hospital', HospitalSchema);
module.exports = hospital;