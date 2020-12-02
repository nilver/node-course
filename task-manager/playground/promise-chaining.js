require('../src/sb/mongosse')
const User = require('../src/models/user')

//"5fc671594b807c1404db912a"

User.findByIdAndUpdate("5fc683012e0d154cdcfe2fc7", {
    age:1
}).then((user) =>{
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})