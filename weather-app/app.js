//50bbb3db42ed6f8f8abac483c9b992ca
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provided  an address')
}else{

    geocode(address, (error, response) => {
        if(error){
            return console.log(error)
        }   
        forecast(response.latitude, response.longitude, (error, data) => {
            if(error){
                return console.log(error)
            }
            console.log('Data', data)
        })
    })
    
}

  