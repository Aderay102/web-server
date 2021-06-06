const request = require ('request')

const forecast = (latitude, longtitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=ca48cf0851996ae98edc1e00fa85dd63&query=' + encodeURIComponent(longtitude) + ',' + encodeURIComponent(latitude) + '&units=f'

    // request ({url, json:true}, (error, {body}) => {
    request ({url, json:true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It's currently " + body.current.weather_descriptions[0] + " degress out. It feels like " + body.current.feelslike + " degress out.")
        }
    })
}

module.exports = forecast