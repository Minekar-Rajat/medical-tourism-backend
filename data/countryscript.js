const fs = require('fs');
const country = require('./country.json');


country.forEach(el => {
    el.name = el.name.toLowerCase();
    el.capital = el.capital.toLowerCase();
    el.link = "this is the link"
});
// console.log(country);

fs.writeFile('real_country.json', JSON.stringify(country, null, 2), (err) => {

    // In case of a error throw err. 
    if (err) throw err;
})