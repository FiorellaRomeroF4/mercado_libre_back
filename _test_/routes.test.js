const supertest = require("supertest");
const app = require("../app");

describe("GET /items", () => {
  test("should return 200 OK", async () => {
    await supertest(app).get("/api/items?search=iphone").expect(200);
  });
});

describe("GET /items", () => {
  test("should return 400 bad request", async () => {
    await supertest(app).get("/api/items").expect(400);
  });
});

describe("GET /items/:id", () => {
  it("should return 200 OK", () => {
    return supertest(app).get("/api/items/MLA911331405").expect(200);
  });
});

describe("GET /items/:id", () => {
  it("should return 400 bad request", () => {
    return supertest(app).get("/api/items/").expect(400);
  });
});
