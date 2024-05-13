const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let firstNum, secondNum, operator;

const operate = function(firstNum, operator, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

let result;
const displayResult = function() {
    if (displayValue1 != "" && displayValue2 != "" && operation != "") {
        result = operate(parseFloat(displayValue1), operation, parseFloat(displayValue2));
        if (result == Infinity) {
            display.textContent = "ERROR";
            displayValue1 = "";
            input = false;
        }
        else {
            display.textContent = Math.round((result + Number.EPSILON) * 10000000) / 10000000;;
        }
        displayValue1 = result.toString();
        operation = "";
        displayValue2 = "";
        first = true;
    }
}

let displayValue1 = "";
let displayValue2 = "";

let operation = "";

let first = true;
let input = false;

let digitButtons = document.querySelectorAll(".digit");

let display = document.querySelector("#display")

let i, j;

for (i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", (ev) => {
        if (first == true) {
            displayValue1 += ev.target.textContent;
            display.textContent = displayValue1;
        }
        else {
            displayValue2 += ev.target.textContent;
            display.textContent = displayValue2;
        } 
        input = true;
    });
}

let operatorButtons = document.querySelectorAll(".operation");

for (i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", (ev) => {
        if (first == true && input == true) {
            operation = ev.target.id;
            first = false;
        }
        else if (first == false && input == true) {
            displayResult();
            operation = ev.target.id;
            first = false;
        }
    });
}

let operateButton = document.querySelector("#equals");
operateButton.addEventListener("click", displayResult);

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    displayValue1 = "";
    displayValue2 = "";
    operation = "";
    first = true;
    input = false;
});

let deleteButton = document.querySelector("#delete")
deleteButton.addEventListener("click", () => {
    if (first == true || displayValue2 == "") {
        displayValue1 = displayValue1.slice(0, -1);
        display.textContent = displayValue1;
    }
    else {
        displayValue2 = displayValue2.slice(0, -1);
        display.textContent = displayValue2;
    }
    
    if (displayValue1 == "") {
        first = true;
        input = false;
    }
});