const { element, browser } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/iframe");
        var frameElement = element(by.id("mce_0_ifr"));
        browser.sleep(2000);
        browser.switchTo().frame(frameElement.getWebElement());
        browser.switchTo().defaultContent();
        var ele= element(by.className("tox-notification tox-notification--in tox-notification--warning"));
        ele.getText().then(function(text){
            console.log(text);
        })

    });
});