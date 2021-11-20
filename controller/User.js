const connection = require("../SQL/connection")

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
                Name VARCHAR(255),
                Description VARCHAR(255),
                Quantity VARCHAR(255),
                Measurement VARCHAR(255)
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



module.exports = {newUser, newUserInventory, newUserProject}

