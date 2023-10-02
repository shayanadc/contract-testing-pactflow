const { Verifier } = require('@pact-foundation/pact');
const path = require('path');
const assert = require('assert');
describe('Pact Verification', () => {
  it('verifies the provider', async () => {
    const options = {
      provider: 'api_server',
      providerBaseUrl: 'http://localhost:5000',
      disableSSLVerification: true,
      pactUrls: [
        path.resolve(
          process.cwd(),
          'tests',
          'OrderConsumerService-ProductProviderService.json'
        ),
      ],
    };
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