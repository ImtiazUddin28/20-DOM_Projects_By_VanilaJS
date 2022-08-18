document.getElementById("withdraw-btn").addEventListener("click", function(){

    let newWithdrawField = document.getElementById("withdraw-field");
    let newWithdrawAmountString = newWithdrawField.value;
    let newWithdrawAmount = parseFloat(newWithdrawAmountString);
    

    let previousWithdrawField = document.getElementById("withdraw-amount");
    let previousWithdrawAmountString = previousWithdrawField.innerText;
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


    const previousBalanceAmountField= document.getElementById("balance-amount");
    const previousBalanceAmountString = previousBalanceAmountField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    newWithdrawField.value = '';

    //error message
    
    if(isNaN(newWithdrawAmount) || (newWithdrawAmount > previousBalanceAmount)) {
        alert("please enter your amount in number");
        return;
    }
    
    let currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    
    previousWithdrawField.innerText =currentWithdrawAmount;
  
    
  
    const currentBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    previousBalanceAmountField.innerText = currentBalanceAmount;
   

});