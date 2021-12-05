const express = require("express");
const app = express();
const connection = require("./SQL/connection");
const cors = require("cors")
const users = require("./routes/User")
const inventory = require("./routes/Inventory")
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(users)
app.use(inventory)


const port = process.env.PORT || 3330;

app.get("/", (req,res) => {
    console.log("hello world")
    res.send("welcome to my costume api")
}) 

app.get("/api", (req,res) => {
    connection.query(
        `SELECT * FROM User`, (error,results) => {
            if (error) {
                console.log("error: ", error)
                res.status(500)
            } else {
                res.json(results)
            }
        }

    )
}) 


app.listen(port,() => {
    console.log("listening on port ", port)
})