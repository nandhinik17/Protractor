const supercalcpage = require('../user-interactions-examples/SuperCalPage');

describe("Window Handling", function(){
    it("valiadte swicthing of windows", function(){
        supercalcpage.navigatetoCalPage();
        supercalcpage.enterAddData();
        supercalcpage.fetchResultValue();
       
    })
})