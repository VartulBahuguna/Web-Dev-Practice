const express = require('express')
const BodyParser = require('body-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

let people = {people :[{name : "Vartul"}] }

// app.get('/people', function(req, res){

//   //  res.send('Hello World')
//     res.json(people)
//   //  res.end();
// })
app.get('/people', function(req, res){

  //  res.send('Hello World')
    
  
    res.json(people)
  //  res.end();
})
app.post('/people', function(req, res){
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
    console.log(req.body.name)
    res.json(people)
})

app.put('/people', function(req, res){
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
    console.log(req.body.name)
    res.json(people)
})

app.delete('/people', function(req, res){
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
    console.log(req.body.name)
    res.json(people)
})

app.get('/people/:name', function(req, res){
   
    res.json({name : req.params.name})
})

app.get('/people/:name/:age', function(req, res){
   
    res.json({name : req.params.name, age : req.params.age})
})

app.listen(3000)