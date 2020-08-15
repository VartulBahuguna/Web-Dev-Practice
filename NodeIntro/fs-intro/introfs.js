var fs = require('fs')


fs.appendFile('./hello.txt', 'Hello World ', function(err){
    if(err)
    {
        console.log('Error')  
    }
    else
    {
        fs.readFile('./hello.txt', function(err, data){
            if(err)
            {
                console.log('Error')
            }
            else
            {
                console.log(data.toString())
            }
        })
    }
})
// fs.readFile('./hello.txt', function(err, data){
//     if(err)
//     {
//         console.log('Error')
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// })