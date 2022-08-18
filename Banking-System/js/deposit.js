document.getElementById("deposit-btn").addEventListener("click", function(){

    let newDepositField = document.getElementById("deposit-field");
    let newDepositAmountString = newDepositField.value;
    let newDepositAmount = parseFloat(newDepositAmountString);
    newDepositField.value = ' ';

    //error message
    
    if(isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert("please enter your amount in number");
        return;
    }

    let previousDepositField = document.getElementById("deposit-amount");
    let previousDepositAmountString = previousDepositField.innerText;
    let previousDepositAmount = parseFloat(previousDepositAmountString);
    
    
    let currentDepositAmount = newDepositAmount + previousDepositAmount;
    
    previousDepositField.innerText =currentDepositAmount;
  
    
    const previousBalanceAmountField= document.getElementById("balance-amount");
    const previousBalanceAmountString = previousBalanceAmountField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    const currentBalanceAmount = newDepositAmount + previousBalanceAmount;
    previousBalanceAmountField.innerText = currentBalanceAmount;
    

});