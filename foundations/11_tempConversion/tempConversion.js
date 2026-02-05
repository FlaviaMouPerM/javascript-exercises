const convertToCelsius = function(fahrenheit) {
let resultado
   
resultado =  (fahrenheit - 32) * 5/9;

return +resultado.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let resultado
  resultado = celsius * 9/5 + 32;
   return +resultado.toFixed(1);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
