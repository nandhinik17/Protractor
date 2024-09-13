const { element } = require("protractor");
var textPage = require('./TextValuePage.js')
describe("drag and drop", function () {

    it("to drag and drop element from one place to another",  async function () {
       // browser.waitForAngularEnabled(false);
        browser.get("https://juliemr.github.io/protractor-demo/");
        // textPage.fetchTextValue();
        let fistTextBox= element(by.model("first"));
        let secondTextBox= element(by.model("second"));
        let goBtn = element(by.id("gobutton"));
        let resultData = element.all(by.xpath("//table[@class='table']//tr//td[3]"));
        fistTextBox.sendKeys(3);
        secondTextBox.sendKeys(6);
        goBtn.click();
        fistTextBox.sendKeys(10);
        secondTextBox.sendKeys(20);
        goBtn.click();
        //var countValue= await resultData.count();
        resultData.count().then(function(countValue){
            for(let i=1;i<=countValue;i++){
               element(by.xpath("(//table[@class='table']//tr//td[3])["+i+"]")).getText().then(function(value){
                    console.log("Result is "+ value);
                })
            }
        })
        


    });

});