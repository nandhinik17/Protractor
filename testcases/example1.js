
var accountBalance=2000; //7000,6000
function deposit(depositAmount){
     accountBalance=accountBalance+depositAmount;
}
function withdraw(WithdrawAmount){
    accountBalance=accountBalance-WithdrawAmount;


}
function withDrawwithMaintenceCharge(){
    this.withdraw();
    var a=100;
    if(a!=200){

    }
    
}
function checkBalance(){
    console.log(accountBalance);
}

deposit(5000);
withdraw(1000);
checkBalance();
