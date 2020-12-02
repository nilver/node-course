const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
})

router.get('/tasks/:t', async (req, res) => {
    const _id = req.params.t

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const allowedUpdate = ['description','completed']
    const updates = Object.keys(req.body)
    console.log(updates)
    const isValidUpdates = updates.every((item) => allowedUpdate.includes(item))

    if(!isValidUpdates || updates.length == 0){
        res.status(400).send({error: 'Invalida fields to update'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id)
      if(!task){
          return res.status(404).send()
      } 
      res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router

