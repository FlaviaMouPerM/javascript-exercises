const sumAll = function(num1,num2) {
  let soma = 0;
  
   if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return 'ERROR' 
  }
  else {
    if ( num1 < 0 || num2 < 0){ 
           return 'ERROR'
      }
      if (num1 > num2){  
        let troca = num1
            num1 = num2
            num2 = troca;
          }
       for(let i = num1; i <= num2; i++ ) {
            soma += i;
          }
          return soma;
     }
     

};

// Do not edit below this line
module.exports = sumAll;

