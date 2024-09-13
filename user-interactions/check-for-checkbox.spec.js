const { element } = require("protractor");
const { takeScreenshot } = require("../util.js");

describe("drag and drop", function () {

    it("to drag and drop element from one place to another", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://the-internet.herokuapp.com/checkboxes");
        var checkboxElement = element(by.xpath('(//input[@type="checkbox"])[2]'))
        checkboxElement.isSelected().then(function(value){
          console.log(value);
        })
        takeScreenshot("checkbox");  

        
        


    });

});