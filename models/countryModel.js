const mongoose = require("mongoose");


const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a country must have a name'],
        unique: true

    },
    weather: {
        type: String,
        required: [true, 'weather is necessary']
    },
    rank: {
        type: Number,
        required: [true, "country's rank is needed"],
        min: [1, 'Rank must be above 1.0']

    },
    inshort: {
        type: String,
        required: [true, "a country's inshort is required"]
    },
    capital: {
        type: String,
        required: [true, "a country's capital is required"]
    },
    language: {
        type: String,
        required: [true, 'knowledge of what country speaks is must']
    },
    about: {
        type: String,
        required: [true, "a country's about is required"]

    },
    timezone: {
        type: String,
        required: [true, "a country's timezone  is needed"]

    },
    currency: {
        type: String,
        required: [true, "a country's currency is required"]

    },
    link: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
    // hospitals:[
    //     {
    //         type:mongoose.Schema.ObjectId,
    //         ref:'hospital'
    //     }
    // ],






}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
const Country = mongoose.model('Country', countrySchema);
module.exports = Country;