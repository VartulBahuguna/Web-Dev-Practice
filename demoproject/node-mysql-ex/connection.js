const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Vartul-50',
    database : 'edureka',
    multipleStatements : true
})

mysqlConnection.connect((err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('Database created')
    }
})

module.exports = mysqlConnection