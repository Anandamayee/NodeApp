
const geoCode = require('./utiles/geocode');
const weatherstack = require('./utiles/weatherStack');


geoCode(process.argv[2], (error, center) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(center);
        weatherstack(center, (err, current) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(current);
            }
        })
    }


})










