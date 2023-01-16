const express = require("express");
const router = express.Router();
const api = require("../services/api");
const { sign } = require("../utils/sign");
const {
  validateQueryParam,
  validateParamId,
} = require("../middlewares/validations");

router.get("/items", validateQueryParam, async function (req, res, next) {
  try {
    const result = await api.search({ query: req.query.q });
    result.author = sign();
    return res.send(result);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/items/:id", validateParamId, async function (req, res, next) {
  try {
    const result = await api.productDetail({ id: req.params.id });
    result.author = sign();
    return res.send(result);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});
module.exports = router;
