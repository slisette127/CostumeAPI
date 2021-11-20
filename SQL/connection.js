const mySql = require("mysql");
const connection = mySql.createConnection({
    host: 'capstone-costume.cavgtreijrxk.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'Costume'

})

module.exports = connection