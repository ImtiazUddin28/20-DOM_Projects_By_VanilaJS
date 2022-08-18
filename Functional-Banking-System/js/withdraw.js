document.getElementById("withdraw-btn").addEventListener("click", function(){
    const newWithdrawAmount = newInputAmount("withdraw-field");
    const previousWithdrawAmount = newElementAmount("withdraw-amount");
    const previousBalanceAmount = newElementAmount("balance-amount")
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    finalField("withdraw-amount",currentWithdrawAmount);
    
    const currentBalanceAmount = previousBalanceAmount - newWithdrawAmount;
        finalField("balance-amount",currentBalanceAmount)
 });