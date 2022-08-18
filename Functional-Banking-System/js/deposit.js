
document.getElementById("deposit-btn").addEventListener("click", function(){
    const newDepositAmount = newInputAmount("deposit-field");
   
    
     if(isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert("please enter your amount in number");
         return;
            }

    const previousDepositAmount= newElementAmount("deposit-amount");
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    finalField("deposit-amount",currentDepositAmount)
    const previousBalanceAmount =  newElementAmount("balance-amount")
    const currentBalanceAmount = newDepositAmount + previousBalanceAmount;
    finalField("balance-amount",currentBalanceAmount)
});