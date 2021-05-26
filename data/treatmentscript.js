const fs = require('fs');
const treatment = require('./uniquetreatments.json');
var t = '{"name": id},';
treatment.forEach(el => {
    el = '"' + el + '"';
    const data = t.replace("id", el);

    fs.appendFile('trial.json', data, (err) => {

        // In case of a error throw err. 
        if (err) throw err;
    })


})