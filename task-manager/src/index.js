const express = require('express')
require('./sb/mongosse.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')

const app = express()
const port = process.env.PORT || 3000

//automactly convert json into objects
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then((result) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/users', (req, res) =>{
    User.find({}).then((users) =>{
        res.send(users)
    }).catch((error) =>{
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) =>{
    const _id = req.params.id
    
    User.findById(_id).then((user) =>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) =>{
        res.status(500).send()
    })
    
})

app.post('/tasks', (req, res) =>{
    const task = new Task(req.body)

    task.save().then(() =>{
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) =>{
    Task.find({}).then((tasks) =>{
        res.send(tasks)
    }).catch((er) => { 
        res.status(500).send()
    })
})

app.get('/tasks/:t', (req, res) =>{
    const _id = req.params.t
    Task.findById(_id).then((task) =>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('Starting server in port :' + port)
})