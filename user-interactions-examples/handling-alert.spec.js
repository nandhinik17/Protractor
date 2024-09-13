const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Handle Alert", function(){
    it("valiadte and accept alert", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/javascript_alerts");
        browser.sleep(3000);
        let jsAlertButton = element(by.buttonText("Click for JS Alert"));
        jsAlertButton.click();
        browser.sleep(3000);
        browser.switchTo().alert().accept();
        takeScreenshot("Alert");

    })
})