function newInputAmount(input_id){
    const newInputField = document.getElementById(input_id);
    const newInputFieldString = newInputField.value;
    const newInputAmountValue = parseFloat(newInputFieldString);
    newInputField.value= '';
    return newInputAmountValue;
}
function newElementAmount(element_id){
    const newElementField = document.getElementById(element_id);
    const newElementFieldString = newElementField.innerText;
    const newElementAmountValue = parseFloat(newElementFieldString);
    return newElementAmountValue;
}
function finalField(field_id,newValue){
    const finalValue =document.getElementById(field_id);
    finalValue.innerText = newValue;
}
