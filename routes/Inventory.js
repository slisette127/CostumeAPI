const express = require("express");
const router = express.Router()
const inventoryController = require("../controller/Inventory")

router.get("/inventory", inventoryController.getInventory)
router.post("/addItem", inventoryController.addItem)
router.delete("/deleteItem/:ItemId", inventoryController.deleteItem)

module.exports = router

