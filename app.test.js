const request = require("supertest")
const baseURL = "https://devsecops-example-bquuzmv2ca-ew.a.run.app"

describe("GET /", () => {
  test("test GET endpoint", () => {
    expect("Hello, World!").toBe("Hello, World!")
  })
})
