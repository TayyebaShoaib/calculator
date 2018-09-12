const display = document.getElementById("display");
const operators = ["+", "/", "*"];
const andMinus = ["-", "+", "/", "*"];

function addToScreen(x, e) {
    var displayVal = display.value;
    var lastLetterPlace = displayVal.length - 1;
    var lastLetter = displayVal[lastLetterPlace];

    if (display.value == "" && operators.includes(x)) {      //The equation should not start from an operator unless minus.
        console.log("do nothing");
    } else if (andMinus.includes(x) && x == lastLetter) {    //No two operators should be added consecutively.
        console.log(lastLetter);
    } else {
        display.value += x;
    }
}

function clearScreen() {
    display.value = "";
}

function answer() {
    var equation = display.value;
    equation = eval(equation);
    display.value = equation;
}