const fs = require('fs');
const path = require('path');

module.exports = {
  takeScreenshot: function(name) {
    const screenshotsDir = path.join(process.cwd(), 'screenshots'); // Specify your directory
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir); // Create directory if it does not exist
    }

    return browser.takeScreenshot().then(function(png) {
      const filePath = path.join(screenshotsDir, `${name}.png`);
      fs.writeFileSync(filePath, new Buffer.from(png, 'base64'));
     
    });
  }
};
