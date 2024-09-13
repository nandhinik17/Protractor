const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Handling Frames", function(){
    it("valiadte text inside the frame", async function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/iframe");
        browser.sleep(6000);
        let frameElement = element(by.id('mce_0_ifr'));
        browser.switchTo().frame(frameElement.getWebElement());
        let textElement = element(by.xpath("//p[contains(text(),'Your content goes here.')]"));
        console.log(await textElement.getText());
    })
})