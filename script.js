$(document).ready(function(){
    var number = Math.round(10 * Math.random());
    var arr = [];
    for (var i = 0; i < 4; i++){
        arr[i] = prompt("Pick a number between 0 and 100");
        if(arr[i]===number){
            return alert("You've got the right number! You win... NOTHING!!!");
        }else if(i===3){ 
            return alert("You did not guess the right number... \nIt was: " + number + "\nyou guessed: " + arr);
        }else {
            alert("wrong number try again you have " + (3 - i) + " tries left!");
        }
    }
});