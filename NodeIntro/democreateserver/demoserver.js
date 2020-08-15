var htpp = require('http')
var events = require('events')


var eventEmitter = new events.EventEmitter()

var app = htpp.createServer(function(req, res){
    eventEmitter.emit('Someone requested','TEST')
    res.end('<h1>Server Works!!</h1>')
})

eventEmitter.on('Someone requested', function(data){
    console.log('A req has been done on the server!!!', data)
})

app.listen(3000, 'localhost', function(){
    console.log('server created')
})