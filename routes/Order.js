const express = require("express");
const {
  createOrder,
  fetchAllOrders,
  fetchLoggedInUserOrders,
  updateOrder,
  paymentOnline,
  paymentSuccess,
} = require("../controller/Order");

const router = express.Router();
//  /orders is already added in base path
router
  .post("/", createOrder)
  .get("/", fetchAllOrders)
  .get("/", fetchLoggedInUserOrders)
  .post("/online-payment", paymentOnline)
  .post("/payment-online/success/:tranId", paymentSuccess)
  .patch('/:id', updateOrder)


exports.router = router;
