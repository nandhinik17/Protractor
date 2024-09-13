const fs = require('fs');
const path = require('path');

module.exports = {
  logBrowserConsole: function(name) {
    browser.manage().logs().get('browser').then(function(browserLogs) {
      const logDir = path.join(process.cwd(), 'logs');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
      }
      const filePath = path.join(logDir, `${name}.log`);
      fs.writeFileSync(filePath, JSON.stringify(browserLogs, null, 2));
      console.log(`Browser console logs saved to ${filePath}`);
    });
  }
};
