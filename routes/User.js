const express = require("express");
const router = express.Router()
const userController = require("../controller/User")
router.post("/adduser", userController.newUser, userController.newUserInventory, userController.newUserProject)
module.exports = router