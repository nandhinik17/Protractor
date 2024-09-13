const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/dynamic_loading/1");
        var chooseElement = element(by.buttonText('Start'));
        var waitElement=element(by.xpath("//h4[contains(text(),'Hello World!')]"));
        chooseElement.click();
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(waitElement), 50000);

        takeScreenshot("wait");

        
        


    });

});