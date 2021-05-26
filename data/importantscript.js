const fs = require('fs');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Treatment = require('./../models/treatmentModel')
// const data = require('./updateddata');
dotenv.config({ path: '../config.env' });
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));

// const treatment = JSON.parse(fs.readFileSync(`${__dirname}/smalltreatment.json`, 'utf-8'));

// const importData = async() => {
//     try {
//         await Treatment.create(treatment)
//         console.log("Data successfully loaded")
//     } catch (err) {
//         console.log(err)
//     }
// }
// const deleteData = async() => {
//     try {
//         await Treatment.deleteMany()
//         console.log("Data successfully deleted")
//     } catch (err) {
//         console.log(err)
//     }

// }
// if (process.argv[2] === '--import') {
//     importData()
// } else if (process.argv[2] === '--delete') {
//     deleteData();
// }
