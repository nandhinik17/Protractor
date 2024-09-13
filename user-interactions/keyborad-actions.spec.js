const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");
const {Key} = require("protractor");
describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/login");
        var loginElement = element(by.name('username'));
        var pswdElement = element(by.name('password'));
        loginElement.sendKeys("Nandhini");
        pswdElement.sendKeys("Nandhini");
        takeScreenshot("Before Clearing the Text");
        // loginElement.clear();
        // pswdElement.clear();
        loginElement.click();
        browser.actions()
            .keyDown(Key.CONTROL) // Press Ctrl key
            .sendKeys('a') // Press 'a' to select all
            .keyUp(Key.CONTROL) // Release Ctrl key
            .sendKeys(Key.BACK_SPACE) // Press Backspace to delete selected text
            .perform();
        takeScreenshot("After Clearing the Text");



    });

});