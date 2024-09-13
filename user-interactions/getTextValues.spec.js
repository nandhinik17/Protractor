const { element } = require("protractor");
var textPage = require('./TextValuePage.js')
describe("drag and drop", function () {

    it("to drag and drop element from one place to another",  function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_attributes.asp");
        textPage.fetchTextValue();

    });

});