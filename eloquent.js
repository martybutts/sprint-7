//Minimum

var min = function(a, b) {

  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion

var isEven = function(number) {
  if (number === 0) {
    return true;
  }
  else if ( number === 1) {
    return false;
  }
  else if (number < 0) {
    return isEven(-number); 
  }
  else {
    return isEven(number -2)
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??