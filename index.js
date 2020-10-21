/*Importing validator functions*/
import validator from './validator.js';
console.log(validator);

/*Getting elements from HTML*/
var continueButton=document.getElementById("continueButton");
var validationButton=document.getElementById("validationButton");
var inputNumber=document.getElementById("inputNumber");
var tryAgain=document.getElementById("tryAgain");

/*Envents Listeners from HTML buttons*/
continueButton.addEventListener("click", continuePayment);
validationButton.addEventListener("click", continuePayment2);
tryAgain.addEventListener("click",home);

/*Functions*/
function continuePayment() {
    document.getElementById('window1').style.display = 'none';
    document.getElementById('window2').style.display = 'block';
}

function continuePayment2() {
    /*Input required*/
    var numbers = /^[0-9]+$/;
    
    if(inputNumber.value.match(numbers)){

    /*Printing masked number*/
    var maskedNumber=validator.maskify(inputNumber.value);
    var p1 = document.createElement("P");
    var result1= document.createTextNode(maskedNumber);
    p1.appendChild(result1);

    /*True or False conditions*/
    var validNumber=validator.isValid(inputNumber.value);

    if (validNumber == true){
        document.getElementById('window2').style.display = 'none';
    document.getElementById('window3').style.display = 'block';
    document.getElementsByClassName("results")[0].appendChild(p1);
    } else {
        document.getElementById('window2').style.display = 'none';
        document.getElementById('window4').style.display = 'block';
        document.getElementsByClassName("results")[1].appendChild(p1);
    } 
} else {alert('Ingresa unicamente números');
}

} 

/*Going back home*/
function home() {
    document.getElementById('window4').style.display = 'none';
    document.getElementById('window1').style.display = 'block';
    document.getElementById('inputNumber').value = '';
    document.getElementById('form').reset();
}

