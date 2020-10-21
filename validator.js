const validator = {

  isValid: (creditCardNumber) => {
    let creditCard = creditCardNumber.split("").reverse(); // Convertir el string en array e invertir los números del array
    let cardNumber = [];
    let number = 0;
    for (let i = 0; i < creditCard.length; i++) {// recorra el array para dar función
       if(i % 2 == 0){ 
        cardNumber.push(parseInt(creditCard[i]))}
        else if(i % 2 != 0 && creditCardNumber[i]*2 < 10){
          cardNumber.push(parseInt(creditCard[i])*2);
        } 
        else {cardNumber.push(parseInt(creditCard[i])*2-9)}
        number += cardNumber[i];
        }
        return (number % 10 == 0);
       },
    

  maskify: (creditCardNumber) => {
    var n=creditCardNumber.length;
    
    if(n<5){
      return creditCardNumber; 
      
    }else{    	
        var x1=creditCardNumber.substr(-4,4);
        var x2=creditCardNumber.substr(0,n-4).replace(/\w/g,"*");
        var x3=x2.concat(x1); 
        return x3;
        
      }
    }
  };

export default validator;

