const { search, productDetail } = require("../services/api");

describe("search Service", () => {
  it("should return an object with categories and items", async () => {
    const result = await search({ query: "iphone" });
    expect(result).toHaveProperty("categories");
    expect(result).toHaveProperty("items");
  });
});

describe("productDetail Service", () => {
  it("should return an object with item", async () => {
    const result = await productDetail({ id: "MLA911331405" });
    expect(result).toHaveProperty("item");
  });
});
