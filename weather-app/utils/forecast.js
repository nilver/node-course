const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=50bbb3db42ed6f8f8abac483c9b992ca&query='+longitude+','+latitude+'&units=f'
   
    request({url:url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            const data = {
                temperature: response.body.current.temperature,
                feelLike: response.body.current.feelslike,
                weather_descriptions: response.body.current.weather_descriptions[0]
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast