$(document).ready(function(){

    const inputBox = $("#inputBox");
    let cardOutput2 = $("#cardOutput2Text");
    let convertBtn = $("#convertBtn");
    let clearBtn = $("#clearBtn");
    let outputList = $("#outputList");

    cardOutput2.fadeOut(1);

    // create a clear input field function (DONE)
    clearBtn.on( "click", function() {
        inputBox.val("");
        cardOutput2.fadeOut(1);
        cardOutput2.text("");
        outputList.empty();
    });

    // create a convert to NATO phonetic function (DONE)
    convertBtn.on("click", function(){
        const str = inputBox.val().toLowerCase();
        let output = "";
        for (const char of str) {
            let value = getNatoPhonetic(char);
            output += value + " ";
        }
        outputList.append('<li>' + output + '</li>');
    });

    inputBox.keydown(function(){
        cardOutput2.fadeOut(100);
    })

    // create a per character output function
    inputBox.keyup(function(){
        let str = inputBox.val().toLowerCase();
        let char = str.charAt(str.length - 1);
        let value = getNatoPhonetic(char);
        cardOutput2.text(value);
        cardOutput2.fadeIn(100);
    });

    //map char to nato phonetic
    function getNatoPhonetic(char) {
        if (char === "a") {
            value = "Alfa";
        } else if (char === "b") {
            value = "Bravo";
        } else if (char === "c") {
            value = "Charlie";
        } else if (char === "d") {
            value = "Delta";
        } else if (char === "e") {
            value = "Echo";
        } else if (char === "f") {
            value = "Foxtrot";
        } else if (char === "g") {
            value = "Golf";
        } else if (char === "h") {
            value = "Hotel";
        } else if (char === "i") {
            value = "India";
        } else if (char === "j") {
            value = "Juliet";
        } else if (char === "k") {
            value = "Kilo";
        } else if (char === "l") {
            value = "Lima";
        } else if (char === "m") {
            value = "Mike";
        } else if (char === "n") {
            value = "November";
        } else if (char === "o") {
            value = "Oscar";
        } else if (char === "p") {
            value = "Papa";
        } else if (char === "q") {
            value = "Quebec";
        } else if (char === "r") {
            value = "Romeo";
        } else if (char === "s") {
            value = "Sierra";
        } else if (char === "t") {
            value = "Tango";
        } else if (char === "u") {
            value = "Uniform";
        } else if (char === "v") {
            value = "Victor";
        } else if (char === "w") {
            value = "Whiskey";
        } else if (char === "x") {
            value = "Xray";
        } else if (char === "y") {
            value = "Yankee";
        } else if (char === "z") {
            value = "Zulu";
        } else if (char === " ") {
            value = " ";
        } else {
            value = "Invalid character";
        }
        return value;
    }

    // create a function to convert output to kebob case 

    // find a way to use jquery animate
})
