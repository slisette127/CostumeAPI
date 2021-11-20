const express = require("express");
const router = express.Router()
const inventoryController = require("../controller/Inventory")
router.get("/inventory", inventoryController.getInventory)

module.exports = router