const { browser, by, element } = require('protractor');
const { ExpectedConditions: EC } = require('protractor');

describe('Capture Specific API Request and Response', function() {
  let apiUrl = 'https://run.mocky.io/v3/abcd1234'; // Replace with your Mocky API URL

  beforeAll(async function() {
    // Navigate to the page that triggers the API call
    browser.waitForAngularEnabled(false);

    await browser.get('https://designer.mocky.io/design/confirmation'); // Replace with your test URL
  });

  it('should print specific API request and response details', async function() {
    // Trigger the API call
    await browser.sleep(5000); // Adjust sleep time based on your request duration

    const triggerButton = element(by.xpath("//span[contains(text(),'New mock')]")); // Adjust selector
    await triggerButton.click();

    // Wait for the request to complete
    await browser.sleep(5000); // Adjust sleep time based on your request duration

    // Capture performance logs
    const logs = await browser.manage().logs().get('performance');

    // Filter and print specific API details
    logs.forEach(log => {
      const message = JSON.parse(log.message);
      if (message.message && message.message.params) {
        const { method, params } = message.message;
        if (method === 'Network.requestWillBeSent') {
            console.log('Request URL:', params.request.url);
            console.log('Request Method:', params.request.method);
            console.log('Request Headers:', params.request.headers);

            console.log('Response:', params.response);
        } 
      }
    });
  });
});
