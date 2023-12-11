const request = require("supertest")
const baseURL = "https://devsecops-example-bquuzmv2ca-ew.a.run.app"

describe("GET /", () => {
  test("test GET endpoint", () => {
    expect("Hello, World!").toBe("Hello, World!")
  })
})

describe("POST /pythagoras/", () => {
  it("test POST endpoint", async () => {
	const response = await request(baseURL)
  	.post("/pythagoras")
  	.send({
    	a: 3,
    	b: 4
  	})
	expect(response.status).toBe(200);
	expect(response.body.hypotenuse).toBe(5);
  })
})

