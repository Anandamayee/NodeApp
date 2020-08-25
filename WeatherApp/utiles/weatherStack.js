const request = require('request');

const weatherstackBaseUrl = "http://api.weatherstack.com/current"
const weatherInfo = (center, callback) => {
    const weatherStackUrl = `${weatherstackBaseUrl}?access_key=d7073430b2f4df226d8bef4d9724b5cf&query=${encodeURIComponent(center[1])},${encodeURIComponent(center[0])}`;
    request.get({ url: weatherStackUrl, json: true }, (error, {body}) => {
        if (error) {
            callback("Something went wrong", undefined);
        }
        else if (body.error) {
            callback(body.error.info, undefined);
        }
        else {
            callback(undefined, body.current);
        }
    } )

}

module.exports = weatherInfo
