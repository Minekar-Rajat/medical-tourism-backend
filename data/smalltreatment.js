const fs = require('fs')


const treatment = require('./treatment.json')
uniq = [...new Set(treatment)];

fs.writeFile('uniquetreatments.json', JSON.stringify(uniq, null, 2), (err) => {

    // In case of a error throw err. 
    if (err) throw err;
})
console.log("data successfully loaded");