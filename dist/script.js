const okButton = document.getElementById('okbtn');
const signUpButton = document.getElementById('signup');
const signInBtn = document.getElementById('signInbtn');
const formBox = document.getElementById('form-box')
const loginH = document.getElementById('LogInheading');
const userName = document.getElementById('username');
const password = document.getElementById('pass');
const confirmPass = document.getElementById('Confirmpass');
const nameError = document.getElementById('username-error')
const cpassError = document.getElementById('c_pass-error')
// const errorField = document.getElementById(' error-field');



signUpButton.addEventListener('click', function(){

    nameError.classList.remove = 'hidden'
    cpassError.classList.remove = 'hidden'

    signInBtn.innerHTML = "Register"


    loginH.innerHTML= 'SignUp Here';
    loginH.style.backgroundColor = 'orange'
    loginH.style.fontWeight = 'bold'
    loginH.style.color = 'white'

    confirmPass.style.display = 'block'
    confirmPass.style.margin = '4px 0px'
    // confirmPass.style.backgroundColor = 'orange'
    confirmPass.style.color = "white"
    confirmPass.style.border = 'green 2px solid'
    confirmPass.style.padding = '6px'
    confirmPass.style.marginTop = '6px'
    confirmPass.style.borderRadius = "4px"

    // userName.style.backgroundColor = 'orange'
    userName.style.color = "white"
    userName.style.border = '2px green solid'
    userName.style.padding = '6px'
    userName.style.borderRadius = "4px"


    // password.style.backgroundColor = 'orange'
    password.style.color = "white"
    password.style.border = 'green 2px solid'
    password.style.padding = '6px'
    password.style.marginTop = "2px"
    password.style.borderRadius = "4px"

    signInBtn.style.marginTop = '4px'

})

signInBtn.addEventListener('click', function(){
    document.getElementById('register').style.display = 'block'
    document.getElementById('register').style.margin = '10%'

})

okButton.addEventListener('click', function(){
    document.getElementById('register').style.display = 'none'
})

loginH.addEventListener('click', function(){
    signInBtn.innerHTML = "LogIn";
    loginH.innerHTML = "LogIn Here"

    confirmPass.style.display = "none"
    errorField.classList.add = 'hidden';

    
    

    userName.style.backgroundColor = 'green'
    userName.style.color = 'red'
    userName.style.padding = '6px'
    userName.style.margin = '8px'
    userName.style.borderRadius = "4px"


    password.style.backgroundColor = 'green'
    
    password.style.color = 'red'
    password.style.padding = '6px'
    password.style.margin = '14px'
    password.style.borderRadius = "4px"

    document.getElementById('Confirmpass').innerHTML = ""

    signInBtn.style.marginTop = '8px'

})



function userValidate(){
    let name2 = document.getElementById('username').value;

    if(name2 == ""){
        document.getElementById('username-error').innerHTML = 'Email does not be empty'
        document.getElementById('username-error').style.color = 'red'
        document.getElementById('username').style.border= 'red 2px solid'
        return false;
    }else if(name2.length < 4 ){
        document.getElementById('username-error').innerHTML = 'user name must be 4'
        document.getElementById('username').style.border= 'red 2px solid'
        document.getElementById('username-error').style.color = 'red'
    }
    else{
        document.getElementById('username-error').innerHTML = ""
        document.getElementById('username').style.border = 'yellow 2px solid' 
        return true;
    }
}
function passValidate(){
    let pass1 = document.getElementById('pass').value;

    if(pass1 == ""){
        document.getElementById('pass-error').innerHTML = 'password does not be empty'
        document.getElementById('pass').style.border= 'red 2px solid'
        document.getElementById('pass-error').style.color = 'red'
        return false;
    }else if(pass1.length < 6){
        document.getElementById('pass-error').innerHTML = 'password must be 6'
        document.getElementById('pass').style.border= 'red 2px solid'
        document.getElementById('pass-error').style.color = 'red'
    }
    else{
        document.getElementById('pass-error').innerHTML = ""
        document.getElementById("pass").style.border = 'yellow 2px solid' 

        return true;
    }
}
function confirmValidate(){
    let pass1 = document.getElementById('pass').value;
    let cPass = document.getElementById('Confirmpass').value;

    if(pass1 != cPass ){
        document.getElementById('c_pass-error').innerHTML = 'password does not match'
        document.getElementById('Confirmpass').style.border= 'red 2px solid'
        document.getElementById('c_pass-error').style.color = 'red'
        return false;
    }
    else{
        document.getElementById('c_pass-error').innerHTML = ""
        document.getElementById('Confirmpass').style.border = 'yellow 2px solid' 
        return true;
    }
}

