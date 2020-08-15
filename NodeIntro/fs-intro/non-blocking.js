var fs = require('fs');
var d
fs.readFile('text.txt', function(err, data){
    if(err)
    {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Dislay after 2 sec" + data.toString())
        d = data;
    }, 2000);

});

 console.log('Start Here');
setTimeout(()=>{
    }, 2000);
console.log(d)





