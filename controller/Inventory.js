const connection = require("../SQL/connection")

const getInventory = (req, res) => {
    connection.query(
        `SELECT * FROM lucy2_Inventory_Table`, (error,results) => {
            if (error) {
                console.log("error: ", error)
                res.status(500)
            } else {
                res.json(results)
            }
        }
    )
}

const addItem = (req, res) => {
    console.log("inside /Post newItem")
    const {Name, Description, Quantity, Measurement, ImageURL} = req.body
    if (req.body) {
        const sql = `INSERT INTO lucy2_Inventory_Table VALUES (ItemId, ?, ?, ?, ?, ?)`
        let body = []
        body.push(Name, Description, Quantity, Measurement, ImageURL)
        connection.query(sql, body, (error, results) => {
            if (error) {
                console.log("there is an error", error)
                res.status(500)
            } else {
                console.log("add new item", results)
                res.send(results)
            }
        }
        )
    }
}

module.exports = {getInventory, addItem}