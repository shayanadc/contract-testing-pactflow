const axios = require('axios');
const ProductApi = require('./product_api_client'); 
const AxiosMockAdapter = require('axios-mock-adapter');


describe("API Pact test", () => {
  describe("getting all products", () => {
    test("products exists", async () => {
      
      let axiosMock = new AxiosMockAdapter(axios);

      axiosMock.onGet('/products').reply(200, [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ]);
  
      const productApi = new ProductApi('http://example.com');
      const response = await productApi.fetchAll();
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ]);
    });
  });
});
