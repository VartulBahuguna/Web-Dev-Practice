const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const CourseModel = mongoose.model('Course')

router.get("/add", (req, res)=>{
    res.render("add-course")
})

router.post("/add", (req, res)=>{
       
   // console.log(req.body)
    //Setting
    var course = new CourseModel();
    course.courseName = res.body.courseName
    course.courseDuration = res.body.courseDuration
    course.courseFee = res.body.courseFee
    course.CourseId = Math.ceil(Math.random()*10000000)
    course.save((err , doc)=>{
        if(!err)
        {
            res.redirect('/course/list')
        }
        else{
            res.send("Error Occured")
        }
    })
})

router.get('/list', (req, res)=>{

    
    //Getting
    CourseModel.find((err, docs)=>{
       if(!err)
       {
           console.log(docs)
           res.render("list", {data : docs})
       }
       else{
           console.log('ERROR!!')
            res.send(err)
       }

   })
})

module.exports = router