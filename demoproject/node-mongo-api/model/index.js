const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Edureka",{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err)
    {
        console.log('Error connecting db')
        console.log(err)
    }
    else{
        console.log('DB Created Sucessfully')
    }
})

const Course = require("./course.model")