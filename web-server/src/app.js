const express = require('express')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

app.get('', (req, res) => {
    res.send('Hi this is express !')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Nilver',
        lastName: 'Viera'
    })
})

app.get('/about', (req, res) => {
    res.send('<h2>About</h2>')
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    
    if(!address) {
        return res.send({
            error: 'You must provider a address'
        })
    }else {
        geocode(address, (error, response) => {
            if(error){
                return res.send({
                    error
                })
            }   
            forecast(response.latitude, response.longitude, (error, 
                temperature, feelslike, description) => {
                if(error) {
                    return res.send({
                        error
                    })
                }
                res.send({
                   temperature,
                   feelslike,
                   description,
                   address
                })
            })
        })
    }
})

app.listen(3000, () => {
    console.log('Starting server on port 3000')
})    