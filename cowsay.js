function cowsay(text){
    var counter = 0;
    var temp= "hello";
    if(text.length > 30){    
        for (var i = 30; i > 0; i--){    
            if (text[i]===" " && counter < 1){
                temp = text.slice(i);
                counter++;
            }
        }
        console.log(temp);
    console.log("\\\ " + text + " /");
    console.log("\\\ " + temp + " /");
    console.log("    ^__^   ");
    console.log(" \\\  (oo)\\\_______");
    console.log("    (__)\\\       )\\\/\\\ ");
    console.log("        ||----w | ");
    console.log("        ||     || ");
    
    }else{
    console.log("\\\ " + text + " /");
    console.log("    ^__^   ");
    console.log(" \\\  (oo)\\\_______");
    console.log("    (__)\\\       )\\\/\\\ ");
    console.log("        ||----w | ");
    console.log("        ||     || ");
}
    
}
cowsay("i love you mariah!"); 