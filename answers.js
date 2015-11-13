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