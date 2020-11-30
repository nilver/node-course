const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
/* 
    db.collection('users').findOne({name: 'Nilver', age: 13}, (error, user) => {
        if (error){
            return console.log('Unable to find user')
        }
        console.log(user)
    }) */

   /*  db.collection('users').find({age: 44}).count((error, count) => {
        if (error){
            console.log('Unable to fecth multiple users')
        }
        console.log(count)
    })
     */
    
     // task
     // findOne 
    db.collection('task').findOne({_id: new ObjectID("5fc3c72e81a9613c7079b8d6")}, (error, task) =>{
        if (error){
            console.log('Unable to fetch task by id')
        }
        console.log(task)
    })
    //findAll
    db.collection('task').find({completed: false}).toArray((error, users) => {
        if(error){
            return console.log('Unable to fetch task')
        }
        console.log(users)
    })

    

}) 