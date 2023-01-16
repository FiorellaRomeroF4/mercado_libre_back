const axios = require("axios");
const _ = require("lodash");

const search = async ({ query }) => {
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
  );
  const { data } = response;
  const { results } = data;
  const categories = [];
  const items = _.map(results, (item) => {
    const result = _.pick(item, ["id", "title", "condition"]);
    result.price = {
      currency: item.currency_id,
      amount: item.price,
    };
    result.picture = item.thumbnail;
    result.free_shipping = item.shipping.free_shipping;
    result.address = item.address.state_name;
    categories.push(item.category_id);
    return result;
  });
  return { categories, items };
};
const productDetail = async ({ id }) => {
  const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
  const { data: productData } = response;
  const responseDescription = await axios.get(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  const { data: descriptionData } = responseDescription;
  const result = _.pick(productData, ["id", "title", "condition"]);
  result.price = {
    currency: productData.currency_id,
    amount: productData.price,
  };
  result.picture = productData.pictures[0].url;
  result.free_shipping = productData.shipping.free_shipping;
  result.sold_quantity = productData.sold_quantity;
  result.description = descriptionData.plain_text;
  return result;
};

module.exports = { search, productDetail };
