const { takeScreenshot } = require("../util");
const testdata = require("../test-data/supercalData.json")
var SuperCalPage = function () {

    //Webelements
    let firstinput = element(by.model("first"));
    let secondinput = element(by.model("second"));
    let goBtn = element(by.id("gobutton"));
    let resultData = element.all(by.xpath("//table[@class='table']//tr//td[3]"));


    //Actions/Methods/Functions

    this.navigatetoCalPage = function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    }
    this.enterAddData = function () {
        firstinput.sendKeys(testdata.SuperAdd.fisrtInput);
        secondinput.sendKeys(testdata.SuperAdd.SecondInput)
        goBtn.click();
        firstinput.sendKeys(testdata.SuperAdd1.fisrtInput);
        secondinput.sendKeys(testdata.SuperAdd1.SecondInput);
        goBtn.click();
        firstinput.sendKeys(testdata.SuperAdd3.fisrtInput);
        secondinput.sendKeys(testdata.SuperAdd3.SecondInput)
        goBtn.click();
        takeScreenshot("TestCase-1-Add Dta in Calc page")

    }
    //important
    this.fetchResultValue = function () {
        resultData.count().then(function (countValue) {
            for (let i = 1; i <= countValue; i++) {
                element(by.xpath("(//table[@class='table']//tr//td[3])[" + i + "]")).getText().then(function (textValue) {
                    console.log("Result of SC " + textValue);
                })
            }
        })
        takeScreenshot("TestCase-1-FetchData")

    }
    this.fetchResultValueUsingGet = function () {
        //using get()--> Another way
        resultData.count().then(function (countValue) {
            for (let i = 0; i < countValue; i++) {
                resultData.get(i).getText().then(function (textValue) {
                    console.log("Result of SC " + textValue);
                })
            }
        })
    }

}

module.exports = new SuperCalPage();

