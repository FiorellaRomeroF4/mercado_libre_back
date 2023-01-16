const validateQueryParam = (req, res, next) => {
  const { search } = req.query;
  if (search) {
    return next();
  }
  return res.status(400).send({ error: "Bad Request" });
};

const validateParamId = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    return next();
  }
  return res.status(400).send({ error: "Bad Request" });
};

module.exports = { validateQueryParam, validateParamId };
