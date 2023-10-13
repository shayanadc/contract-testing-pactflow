const axios = require('axios');
const ProductApi = require('./product_api_client'); 

const { PactV3, MatchersV3 } = require('@pact-foundation/pact');
const { eachLike } = MatchersV3;

const path = require('path');

const provider = new PactV3({
  consumer: "OrderConsumerService",
  provider: "ProductProviderService",
  dir: path.resolve(process.cwd(), "tests"),
});

describe("API Pact test", () => {
  describe("getting all products", () => {
    test("products exists", async () => {
      await provider.addInteraction({
        states: [{ description: "products exist" }],
        uponReceiving: "get all products",
        withRequest: {
          method: "GET",
          path: "/products",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: eachLike({
            id: 2512,
            type: "t-shirt",
            name: "Gem V",
          }),
        },
      });

      await provider.executeTest(async (mockService) => {
      
        const productApi = new ProductApi(mockService.url);
        const response = await productApi.fetchAll();
        expect(response.data).toStrictEqual([
          {
            id: 2512,
            type: "t-shirt",
            name: "Gem V",
          },
        ]);
      });
    });
  });
});