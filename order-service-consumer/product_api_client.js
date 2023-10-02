const axios = require('axios');

function ProductApi(product_api_uri) {
  this.httpClient = axios.create({ baseURL: product_api_uri });
  this.fetchAll = function () {
    return this.httpClient.get('/products').then((res) => {
      return res
    });
  };
}
module.exports = ProductApi;