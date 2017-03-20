var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var operator = prompt("Enter the operator: ('add', 'subtract', 'multiply', 'divide')").toLowerCase();
var number2 = parseInt(prompt("Enter another number:"));
if (operator == "add"){
  alert( add(number1 ,number2));
}else if (operator == "subtract"){
  alert(subtract(number1,number2));
}else if (operator =="multiply"){
  alert(multiply(number1,number2));
}else if (operator =="divide"){
  alert(divide(number1,number2));
}else {
alert("wrong input");
}
// var result = divide(number1, number2);
// alert(result);
