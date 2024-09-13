const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("CheckBox Selcted/Not", function () {
    it("valiadte whather checkbox checked/not", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/checkboxes");
        browser.sleep(5000);
        var checkboxElement = element.all(by.xpath('//input[@type="checkbox"]'));
        checkboxElement.map((check)=>{
            check.isDisplayed().then(function(booleanVale){
                console.log(booleanVale);
            })
        })
       
        
       
    })
})