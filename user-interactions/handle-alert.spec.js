const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/javascript_alerts");
        var alertElement=element(by.buttonText('Click for JS Alert'));
        alertElement.click();
        browser.switchTo().alert().accept();
        takeScreenshot("After Handling Alert");


    });

});