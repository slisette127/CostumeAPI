const { Router } = require("express");
const express = require("express");
const router = express.Router()
const inventoryController = require("../controller/Inventory")
router.get("/inventory", inventoryController.getInventory)
router.post("/addItem", inventoryController.addItem)

module.exports = router

