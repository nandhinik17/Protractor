const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Explicit Wait", function(){
    it("Wait for the visibility of elements", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/dynamic_loading/1");
        browser.sleep(5000);
        let startBtn = element(by.xpath("//button[contains(text(),'Start')]"));
        startBtn.click();
        let helloWorldText = element(by.id("finish"));
        const expected = protractor.ExpectedConditions;
        browser.wait(expected.visibilityOf(helloWorldText), 5000);
        helloWorldText.getText().then(function(textValue){
            console.log(textValue);
        })
       

    })
})