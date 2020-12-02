const mongosse = require('mongoose')
const validator = require('validator')

const User = mongosse.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age coulnt be negative')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(e) {
            if (!validator.isEmail(e)) {
                throw Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(e) {
            if (e.toLowerCase().includes("password")) {
                throw new Error('Please try a diferent password !')
            }
        }
    }
})

module.exports = User