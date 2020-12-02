const express = require('express')
require('./sb/mongosse.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//automactly convert json into objects
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Starting server in port :' + port)
})