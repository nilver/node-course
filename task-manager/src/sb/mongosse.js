const mongosse = require('mongoose')
const validator = require('validator')

mongosse.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

/* const User = mongosse.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age coulnt be negative')
            }
        }
    },
    email:{
       type: String,
       required: true,
       trim: true,
       lowercase: true,
       validate(e){
        if(!validator.isEmail(e)){
            throw Error('Email is invalid')
        }
       } 
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(e){
            if(e.toLowerCase().includes("password")){
                throw new Error('Please try a diferent password !')
            }
        }
    }

})

 const me = new User({
     name: 'Jhon2',
     email: 'nilver@GMAIL.com  ',
     password: 'pepeasd'       
})
me.save().then(() =>{
    console.log(me)
}).catch((error) =>{
    console.log('Erorr! ',error)
}) 
 */
 const Task = mongosse.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
 })

 const ta =  new Task({
     description: ' Spleeping ',
 }) 

 ta.save().then(()=>{
     console.log(ta)
 }).catch((error) => {
     console.log(error)
 }) 