const { Verifier } = require('@pact-foundation/pact');
const path = require('path');
const assert = require('assert');
describe('Pact Verification', () => {
  it('verifies the provider', async () => {
    const options = {
        provider: "ProductProviderService",
        providerBaseUrl: "http://localhost:5000",
        pactBrokerUrl: "https://shayanadc.pactflow.io",
        consumerVersionSelectors: ["1.0.0"],
        consumerVersionTags: ["1.0.0"],
        pactBrokerToken: "v_kaCEiuq-RpacJQflqV4g",
        consumerVersionTags: ['master', 'test', 'prod'],
        publishVerificationResult: true,
        providerVersion: "1.0.0", 
      }
    return await new Verifier(options)
      .verifyProvider()
      .then((output) => {
        console.log('Pact Verification Complete!');
      })
      .catch(function (error) {
        console.log(error);
        assert.fail();
      });

  });
});