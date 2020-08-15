var exp = require('express')
var http = require('http')
var fs = require('fs')
const { fstat } = require('fs')
var app = exp()

var serv = http.createServer(app)
app.get('/', function(req, res){
    res.send('<h1>Server Works!!</h1>')
})
app.get('/test', function(req, res){
  //  res.send('<h1>Server Works on TEST!!</h1>')
    fs.readFile('./db.json', function(err, data){
        res.send(JSON.parse(data.toString()).tasks)
    })
})

serv.listen(3000, function(){
    console.log('Server listening to port 3000')
})