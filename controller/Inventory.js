const connection = require("../SQL/connection")

const getInventory = (req, res) => {
    connection.query(
        `SELECT * FROM person2_Inventory_Table`, (error,results) => {
            if (error) {
                console.log("error: ", error)
                res.status(500)
            } else {
                res.json(results)
            }
        }
    )
}

module.exports = {getInventory}