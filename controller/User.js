const mysql = require("mysql")
const connection = require("../SQL/connection")

const logIn = (req, res) => {
        console.log("log in route")
        console.log(req.body)
        const {UserName, UserPassword} = req.body
        let sql = `SELECT * FROM User WHERE UserName = ?;`
        sql = mysql.format(sql, [UserName])
        connection.query( sql , (err, rows) => {
            console.log(rows.length)
            if (UserPassword === rows[0].UserPassword) {
                res.json(rows[0].UserName)
            } else {
                res.status(401).send("User name and/or Password are incorrect")
                console.log('error' + err)
            }
        })

}

const newUser = (req, res, next) => {
    console.log("inside /Post newUserRoute") 
    const {UserName, UserPassword, UserEmail} = req.body
    if (req.body) {
        const sql = `INSERT INTO User VALUES (UserId,?,?,?)`
        let body = []
        body.push(UserName, UserPassword, UserEmail)
        connection.query(sql, body, (error, results) => {
            if (error) {
                console.log("there is an error ", error)
                res.status(500)
            } else {
                console.log("new user added", results)
                next()
            }
        })
    }
}

const newUserInventory = (req, res, next) => {
    console.log("inside /Post newUserInventoryRoute") 
    const {UserName} = req.body
    if (req.body) {
        const sql = `
            CREATE TABLE ${UserName}_Inventory_Table (
                ItemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(255) NOT NULL,
                Description VARCHAR(255),
                Quantity VARCHAR(255) NOT NULL,
                Measurement VARCHAR(255) NOT NULL,
                ImageURL VARCHAR(255) NOT NULL
            );
        `
       
        connection.query(sql, (error, results) => {
            if (error) {
                console.log("there is an error ", error)
                res.status(500)
            } else {
                console.log("new items added", results)
                next()
            }
        })

    }
}

const newUserProject = (req, res) => {
    console.log("inside /Post newUserProject Route")
    const {UserName} = req.body
    if (req.body) {
        const sql = `
            CREATE TABLE ${UserName}_Project_Table(
                ProjectId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                ProjectName VARCHAR(255)
                )
        `
        connection.query(sql, (error, results) => {
            if (error) {
                console.log("there is an error", error)
                res.status(500)
            } else {
                res.send(results)
            }
        })

    }
}



module.exports = {newUser, newUserInventory, newUserProject, logIn}

