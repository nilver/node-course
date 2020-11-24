/**
 * console.log('Starting...')

setTimeout(() => {
    console.log('2 second timer')
}, 2000)

setTimeout(() => {
    console.log('0 seconds timer')
}, 0)

console.log('Stoping...')

 *starting
 * stoping
 * 0 seconfs 
 * 2 seconds
 */
//50bbb3db42ed6f8f8abac483c9b992ca

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=50bbb3db42ed6f8f8abac483c9b992ca&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    //console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})