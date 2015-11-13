/*
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

//returns the factorial of the input with recursion
function factorial (number){
    if(number === 0){
        return 1;
    }
    return number*(factorial(number-1));
}
console.log(factorial(5));
*/

//factorial with loop instead of recursion
function facLoop(number){
    var array = [];
    for(var i=number;i>0;i--){
      array.push(number);
    }
    var sum = 1;
    for (var j=0; j < array.length -2;j++){
        sum *= array[j];
    }
    return sum;
}
console.log(facLoop(5));

//returns input string with first letters of every word in capitals
/*function caps (inputString){
    var a = inputString;
    for(var i=0; i <inputString.length; i++){
        if(i === 0){
            a[i] = inputString[i].toUpperCase();
        }else if(inputString[i]===" "){
            a[i+1]= inputString[i+1].toUpperCase();
        }
    }
    return a;
}
console.log(caps("hello my name is nick")); */