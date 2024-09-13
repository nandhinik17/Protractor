const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Clear The text", function () {
    it("valiadte by clearing the text", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/login");
        browser.sleep(5000);
        var loginName = element(by.id("username"));
        loginName.sendKeys("nandhini ");
        loginName.clear();
        browser.sleep(5000);
        // browser.actions()
        //     .keyDown(Key.CONTROL) // Press Ctrl key
        //     .sendKeys('a') // Press 'a' to select all
        //     .keyUp(Key.CONTROL) // Release Ctrl key
        //     .sendKeys(Key.BACK_SPACE) // Press Backspace to delete selected text
        //     .perform();
        takeScreenshot("Clear The Text");
    })
})