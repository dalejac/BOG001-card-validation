function continuarPago() {
    document.getElementById('ventana1').style.display = 'none';
    document.getElementById('ventana2').style.display = 'block';
}


function continuarPago2(cardNum)
{
    var numbers = /^[0-9]+$/;
    
    if(cardNum.value.match(numbers)){
        document.getElementById("ventana2").style.display="none";
        document.getElementById("ventana3").style.display="block";
    }else{
        alert('Por favor, ingresa solamente números.');

    }
    
}

import validator from './validator.js';

console.log(validator);



