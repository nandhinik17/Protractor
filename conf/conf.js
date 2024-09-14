

exports.config = {
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    // 'shardTestFiles': true,
    // 'maxInstances': 1
  },



//   //allure Report
//   onPrepare: function () {
//     var AllureReporter = require('jasmine-allure-reporter');
//     jasmine.getEnv().addReporter(new AllureReporter());
//     jasmine.getEnv().afterEach(function (done) {
//       browser.takeScreenshot().then(function (png) {
//         allure.createAttachment('Screenshot', function () {
//           return new Buffer(png, 'base64')
//         }, 'image/png')();
//         done();
//       })
//     });
//   },
// //to generate XML File-use jamine report
//   onPrepare: function () {
//     var jasmineReporters = require('jasmine-reporters');
//     jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
//       consolidateAll: true,
//       savePath: './',
//       filePrefix: 'xmlresults'
//     }));
//   },
//   //to generate HTML Report from XML file
//   onComplete: function () {
//     var browserName, browserVersion;
//     var capsPromise = browser.getCapabilities();

//     capsPromise.then(function (caps) {
//       browserName = caps.get('browserName');
//       browserVersion = caps.get('version');

//       var HTMLReport = require('protractor-html-reporter');

//       testConfig = {
//         reportTitle: 'Test Execution Report',
//         outputPath: './',
//         screenshotPath: './screenshots',
//         testBrowser: browserName,
//         browserVersion: browserVersion,
//         modifiedSuiteName: false,
//         screenshotsOnlyOnFailure: true
//       };
//       new HTMLReport().from('xmlresults.xml', testConfig);
//     });
//   },
// //Protractor Beautiful Report
//   onPrepare: function() {
//     var HtmlReporter = require('protractor-beautiful-reporter');
//     // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
//     jasmine.getEnv().addReporter(new HtmlReporter({
//        baseDirectory: 'tmp/screenshots'
//     }).getJasmine2Reporter());
//  },

  framework: 'jasmine',
 specs: ['../user-interactions-examples/dynamic-xpath-example.spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },
}
