const express = require("express");
const orderController = require("../controllers/order");
const router = express.Router();

router
  .post("/", orderController.create)
  .get("/", orderController.getAll)
  .get("/user/:id", orderController.getByUserId)
  .patch("/:id", orderController.updateById);

module.exports = router;
