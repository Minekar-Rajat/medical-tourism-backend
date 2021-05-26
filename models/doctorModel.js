const mongoose = require("mongoose");
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { stringify } = require('json5');
const hospital = require("./hospitalModel");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a doctor must have a name'],
        unique: true

    },
    experience: {
        type: String,
        // required: [true, 'a doctor must be experienced']
    },
    location: {
        type: String,
        required: [true, "doctor's location is needed"]


    },
    fees: {
        type: Number,
        required: [true, "a doctor's fees is required"],
        min: [0, 'Fees must be above 0']
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0']

    },
    lang: {
        type: [String],
        required: [true, 'knowledge of what doctor speaks is must']
    },
    education: {
        type: String,

    },
    
    edu: {
        type: [String],
        required: [true, "a doctor's education history is needed"]

    },
    // email: {
    //     type: String,
    //     required: [true, 'Please provide the email'],
    //     unique: true,
    //     lowercase: true,
    //     validate: [validator.isEmail, 'Please provide a valid email']
    // },
    photo: {
        type: String
    },
    // role: {
    //     type: String,

    //     default: 'doctor'
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
    hospital: {
        type: mongoose.Schema.ObjectId,
        ref: 'hospital',
        // unique: true,
        sparse: true

        //required: [true, 'a doctor must have a hospital']
    },
    // passwordChangedAt: Date,
    // passwordResetToken: String,
    // passwordResetExpires: Date,
    // active: {
    //     type: Boolean,
    //     default: true,
    //     select: false
    // }





}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
doctorSchema.virtual('review', {
    ref: 'review',
    foreignField: 'doctor',
    localField: '_id'


});

doctorSchema.virtual('Treatment', {
    ref: 'Treatment',
    foreignField: 'doctor',
    localField: '_id'


});
doctorSchema.pre('deleteOne', function(next) {
    const doctorid = this.getQuery()["_id"];
    mongoose.model("review").deleteMany({ 'doctor': doctorid }, function(err, result) {
        if (err) {
            console.log(`[error] ${err}`);
            next(err);
        } else {
            console.log('success');
            next();
        }
    });
});


// doctorSchema.virtual('HospitalName').get(async function() {
//     console.log(this.hospital);
//     const { name } = await hospital.findById(this.hospital);
//     //console.log(name);
//     return name;
// });


// doctorSchema.pre('save', async function(next) {
//     //only run this function if password is actually modified 
//     if (!this.isModified('password')) return next();
//     //hashing the password with cost of 12 (salt string)
//     this.password = await bcrypt.hash(this.password, 12);
//     //delete this field as we dnt want in the database
//     this.passwordConfirm = undefined;
//     next();

// })
// doctorSchema.pre(/^find/, function(next) {
//     // this points to the current query
//     this.find({ active: { $ne: false } });

//     next();
// });
// doctorSchema.pre('save', function(next) {
//     if (!this.isModified('password') || this.isNew) {
//         return next();
//     }
//     this.passwordChangedAt = Date.now() - 1000;
//     //to execute smoothly we subtract 1sec
//     next();
// });
// doctorSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
//     //  this.password will not be available ass password is not available
//     return await bcrypt.compare(candidatePassword, userPassword);
// }
// doctorSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
//     if (this.passwordChangedAt) {
//         //console.log(this.passwordChangedAt, JWTTimestamp);
//         const changedTimeStamp = parseInt((this.passwordChangedAt.getTime() / 1000), 10);
//         return (changedTimeStamp > JWTTimestamp);

//     }
//     //false means not changed
//     return false;
// }
// doctorSchema.methods.createPasswordResetToken = function() {
//     const resetToken = crypto.randomBytes(32).toString('hex');

//     this.passwordResetToken = crypto
//         .createHash('sha256')
//         .update(resetToken)
//         .digest('hex');

//     console.log({ resetToken }, this.passwordResetToken);

//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

//     return resetToken;
// };
doctorSchema.pre(/^find/, function(next) {

        this.populate({
            path: 'review',
            select: 'name'
        }).
        populate({
            path: 'Treatment',
            select: 'name'
        })


        next();
    })
    doctorSchema.pre('save', function(next) {

        this.populate({
            path: 'review',
            select: 'name'
        }).
        populate({
            path: 'Treatment',
            select: 'name'
        })


        next();
    })
    // doctorSchema.pre('update', function(next) {

//         this.model('Treatment').update({}, { "$pull": { "doctor": this._id } },
//             next
//         );
//     })
// doctorSchema.pre('deleteOne', function(next) {
//     // Remove all the assignment docs that reference the removed person.
//     this.model('review').remove({ doctor: this._id }, next);
//     this.model('Treatment').remove({ doctor: this._id }, next);
// });
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;