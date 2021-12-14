const connection = require("../SQL/connection")

const getInventory = (req, res) => {
    console.log(req.headers.username)
    connection.query(
        `SELECT * FROM ${req.headers.username}_Inventory_Table`, (error,results) => {
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
    console.log(req)
    console.log("inside /Post newItem")
    const {Name, Description, Quantity, Cost, Measurement, ImageURL} = req.body
    if (req.body) {
        const sql = `INSERT INTO ${req.headers.username}_Inventory_Table VALUES (ItemId, ?, ?, ?, ?, ?, ?)`
        let body = []
        body.push(Name, Description, Quantity, Cost, Measurement, ImageURL)
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

const deleteItem = (req, res) => {
    console.log(req)
    console.log("inside /delete deleteItem")
    const {ItemId} =req.params
    if (req.body) {
        const sql = `DELETE FROM lucy2_Inventory_Table WHERE ItemId = ?;`
        let body = [ItemId]
        connection.query(sql, body, (error, results) => {
            if (error) {
                console.log("there is an error", error)
                req.status(500)
            } else {
                console.log("delete item", results)
                res.send(results)
            }
        })
    }
}

module.exports = {getInventory, addItem, deleteItem}