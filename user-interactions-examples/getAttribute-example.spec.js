const { browser, element } = require("protractor");
const { takeScreenshot } = require("../util");

describe("Get the Attribute Values", function () {
    it("valiadte the multiple Attribute Values",  function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/html/html_attributes.asp");
        browser.sleep(5000);
        // var htmlElement = element(by.xpath("//a[contains(text(),'HTML HOME')]"));
        // htmlElement.getAttribute('href').then(function(text){
        //    console.log(text);
        // })

        var htmlELements = element.all(by.tagName('a')); // using all for taking multiple elements
        htmlELements.map((element)=>{  //as like for loop
            element.getAttribute('href').then(function(link){ //normal function
                console.log(link);
               });
        })
        htmlELements.count().then(function(countvalue){
            console.log("Count is "+ countvalue);
        })
       // console.log( htmlElement.getAttribute('href'))
        // takeScreenshot("Clear The Text");
    })
})