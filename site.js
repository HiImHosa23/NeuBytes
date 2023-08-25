var log = document.getElementById('login');
var reg = document.getElementById('register');
var btn = document.getElementById('btn');

function login() {
    log.style.left = "27px";
    reg.style.right = "-350px";
    btn.style.left = "0px";

}

function register() {
    log.style.left = "-350px";
    reg.style.right = "25px";
    btn.style.left = "150px";

}

// View password

function myLogPassword() {
    var password = document.getElementById('logPassword');
    var eye = document.getElementById('eye');
    var eyeSlash = document.getElementById('eye-slash');

    if(password.type === "password") {
        password.type = "text"
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";

    }else {
        password.type = "password"
        eye.style.opacity = "1";
        eyeSlash.style.opacity = "0";

    }

}

function myRegPassword() {
    var password = document.getElementById('regPassword');
    var eye = document.getElementById('eye-2');
    var eyeSlash = document.getElementById('eye-slash-2');

    if(password.type === "password") {
        password.type = "text"
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";

    }else {
        password.type = "password"
        eye.style.opacity = "1";
        eyeSlash.style.opacity = "0";

    }

}

const myDiv = document.getElementById("myDiv")
let inputCount = 0;

// do client side things here!
let handleButtonClick = () => {
    console.log("Button clicked!");

    inputCount++;

    //let oldHtml = myDiv.innerHTML;

    input = "Ingredient" + inputCount.toString

    ingredientsArray= new Array()
    ingredientsArray.push(input)

    myDiv.innerHTML = myDiv.innerHTML + '<br>'+ '<input type="text" id="ingredients" name=' + input +  ' placeholder= "New Ingredient" > <br>';
    

    
};
