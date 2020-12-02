require('../src/sb/mongosse')
const Task = require('../src/models/task')

//"5fc67eb8059f1c49641056a8"

Task.findByIdAndDelete("5fc6ae0f12cec0126035943e").then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((e) => {
    console.log(e)
}).catch((e) =>{
    console.log(e)
})