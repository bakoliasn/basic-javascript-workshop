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


//factorial with loop instead of recursion
function facLoop(number){
    var sum = 1;
    for(var i = number; i > 1; i--){
        sum *= i;
    }
    return sum;
}
console.log(facLoop(5));





//returns input string with first letters of every word in capitals
function caps (inputString){
    var a = "";
    for(var i=0; i <inputString.length; i++){
        if(i===0){
            a += inputString[i].toUpperCase();
        } else if(inputString[i]===" ") {
            a += " " + inputString[i+1].toUpperCase();
            i++;
        } else {
            a += inputString[i].toLowerCase();
        }

    }
    return a;
}
console.log(caps("hello my name is nick"));





//input string return longest word in string
function long (inputString){
    var array = inputString.split(" ");
    var biggestIndex = 0;
    var word = null;
    console.log(array);
    for (var i = 0; i < array.length; i++){
        if(array[i].length > biggestIndex){
            word = array[i];
            biggestIndex = word.length
            console.log(array);
        }
    }
   return word;
}
console.log(long("hello my name is nicholas"));


//input array return largest number
function large (inputArray){
    var temp = 0;
    for(var i = 0; i <inputArray.length; i++){
        if(inputArray[i] > temp){
            temp = inputArray[i];
            
        }
    }
    return temp;
}
var a = [1,5,6,8,3,5,7];
console.log(large(a));


//input array returns only truthy values
function truthy (array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i]){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
var sampleArray = [false,true,true,true,false];
console.log(truthy(sampleArray));


// another way to do truthy
function truthy2 (array){
    return array.filter(function(arg){
        if(arg){
            return true;
        } else return false;
    });
}
var array1 =[false,false,true];
console.log(truthy2(array1));




//takes an array of numbers and returns the sum
function sum (array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
var numberArray = [3,2,3,3,5,5,7,74,3,2,,5,5,7,8];
console.log(sum(numberArray));
*/

//inputs 2 arrays and returns one with only the unique values
function unique(array1, array2){
   var a = array1.concat(array2);
   var array=[];
   var counter =0;
   for(var i = 0; i < a.length; i++){
       counter = 0;
       for(var j= 0; j < a.length; j++){
           if(a[i] === a[j]){
               counter++;
           }
       }
       if(counter < 2){
           array.push(a[i]);
       }
     
   }
   return array;
}
var test2 = [1,5,6,8,3,7];
var test3 = [1,6,3,5,7];

console.log(unique(test2, test3));