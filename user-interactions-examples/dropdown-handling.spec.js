const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Drop Down handling", function(){
    it("valiadte and handle drop down", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/dropdown");
        let dropdown = element(by.id("hsjsjsj"));
        let drpValue = element(by.xpath("//option[text()='Option 1']"));
        dropdown.click();
        drpValue.click();
        browser.sleep(5000);
        takeScreenshot("DropDown");
    })
})