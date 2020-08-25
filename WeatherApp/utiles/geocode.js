const request = require('request');
const mapboxBaseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const geoCode = (address='Bhubaneswar', callback) => {
    if (!address && address != '') {
        callback("Please enter your location", undefined);
    }
    else {
        const mapboxUrl = `${mapboxBaseUrl}${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiYW5kYW1heWVlIiwiYSI6ImNrZThkd3drNjFibDgycXJ6ZTQ2eTJndnYifQ.8xktAif18J2_AG-zRXubyA`
        request.get({ url: mapboxUrl, json: true }, (error, {body}) => {
            if (error) {
                callback("Please enter valid data.", undefined);
            }
            else if (body.features.length == 0) {
                callback("Please enter a valid address.", undefined);
            }
            else {
                center = body.features[0].center;
                callback(undefined, center)
            }
        })
    }

}


module.exports = geoCode;