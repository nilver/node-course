const request = require('request')

const baseUrlLtn = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const access_key_mapbox = '.json?access_token=pk.eyJ1IjoibmlsdmVydiIsImEiOiJja2hoNDRzaWcwazY5MnlvYmswOHlhOGY5In0.GYygrqaVUn5Q6urdFzyYRg&limit=1'

const geoCode = (address, callback) => {
    const url = baseUrlLtn + address + access_key_mapbox
    request({url: url, json: true},(err, response) => {
        if(err) {
            callback('Unable to connect to mapbox service', undefined)  
        } else if(response.body.message === 'Not Found' ){
            callback('Invalid location to mapbox service', undefined)
        } else {
            const data = {
                longitude: response.body.features[0].center[1],
                latitude: response.body.features[0].center[0]
            }
            callback(undefined, data)
        }    
    })
}

module.exports = geoCode