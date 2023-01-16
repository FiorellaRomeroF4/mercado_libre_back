const express = require("express");
const router = express.Router();
const api = require("../services/api");
const { sign } = require("../utils/sign");

router.get("/items", async function (req, res, next) {
  const result = await api.search({ query: req.query.q });
  result.author = sign();
  return res.send(result);
});

router.get("/items/:id", async function (req, res, next) {
  const result = await api.productDetail({ id: req.params.id });
  result.author = sign();
  return res.send(result);
});
module.exports = router;
