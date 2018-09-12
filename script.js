var calculationDone = false;

function displayToScreen(x) {
    if (!calculationDone) {
        document.calculator.display.value += x;
    }
}

function calculateAnswer() {
    var equation = document.calculator.display.value;
    equation = eval(equation);
    document.calculator.display.value = equation;
    calculationDone = true;
}

function clearScreen() {
    document.calculator.display.value = "";
    calculationDone = false;
}