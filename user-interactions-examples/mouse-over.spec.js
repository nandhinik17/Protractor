const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Mouse Over", function(){
    it("valiadte Mouse Over", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/hovers");
        let hoverElement = element(by.className("jsjsj"));
        browser.actions().mouseMove(hoverElement).perform();
        browser.sleep(4000);
        takeScreenshot("Mouse Hover");
    })
})