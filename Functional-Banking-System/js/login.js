let button = document.getElementById('buttonSubmit').addEventListener('click', function() {
    let email = document.getElementById('userEmail').value;
    let password = document.getElementById('userPassword').value;
    console.log(email, password);
    if(email==="imtiazuddin@gmail.com" && password==="imtiaz"){
        
        window.location.href = 'bank.html'
    }
    else{
        alert("Sorry your login information is incorrect,please try again");
    }
})