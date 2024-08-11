const express = require("express");
const {
  createOrder,
  fetchAllOrders,
  fetchLoggedInUserOrders,
} = require("../controller/Order");
const { deleteProduct } = require("../controller/Product");

const router = express.Router();
//  /orders is already added in base path
router
  .post("/", createOrder)
  .get("/", fetchAllOrders)
  .get("/", fetchLoggedInUserOrders)
  .patch("/:id", deleteProduct);

exports.router = router;
