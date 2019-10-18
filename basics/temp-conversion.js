
let fahrenheit = 105;
let celsiusConstant = 32;
let kelvinConstant = 459.67;
let constant = 5/9;

//This is the celsius value
let celsius = (fahrenheit - celsiusConstant) * constant;
console.log('Celsius : '+celsius);

//This is the kelvin value
let kelvin = (fahrenheit + kelvinConstant) * constant;
console.log('Kelvin : '+kelvin);
