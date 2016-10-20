// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber
function divide(x,y){
 return x/y
}

function multiply(x,y){
    return x*y
}

function subtract(x,y){
    return x-y
}

function add(x,y) {
    return x+y
}

function power(x,y) {
    return Math.pow(x,y);
}

function square_root(x,y) {
    return Math.pow(x,1/2);
}

function logBase10(x,y) {
    return Math.log(x)
}

function generateRandomNumber(x) {
    	
return Math.floor( Math.random() * 9 )

}

   function fact(x) {
  for (var i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x
}