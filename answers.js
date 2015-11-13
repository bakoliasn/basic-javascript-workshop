//input string log first char 
function initial (inputString){
    return inputString[0];
}
console.log(initial("Nick"));
console.log(initial("hello"));
console.log(initial(""));

//input string log last char
function last (inputString){
    return inputString[(inputString.length - 1)];
}
console.log(last("nick"));
console.log(last(""));

//input string and number log string at index number
function stringNum (inputString, inputNumber){
     return inputString[inputNumber];
}
console.log(stringNum("hello", 3));
console.log(stringNum("hello", 2));

//adds a + b
function add(a, b){
    return a + b;
}
console.log(add(4, 5));
console.log(add(7, false));

//multiplies a and b
function multiply(a,b){
    return a*b;
}
console.log(multiply(4,6));

//input numbers and an operation return the reslut
function opp (num1, num2, operator){
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 -num2;
        case "mult":
            return num1 * num2;
        case "div":
            return num1/num2;
        default:
            console.log("enter a valid operator");
    }
}
console.log(opp(2,4,"mult"));

//input string and number return string number amount of times
function stringRepeat(inputString, inputNumber) {
    var array = [];
    for(var i=0;i < inputNumber; i++){
        array.push(inputString);
    }
    return console.log(array);
}
console.log(stringRepeat("hello", 5));



//input string return string with index's reversed
function reverse(inputString){
    var array = [];
    for(var i = 0; i <= inputString.length -1; i++){
        array.push(inputString[(inputString.length - 1 - i)]);
    }
    return array;
}
console.log(reverse("nick"));