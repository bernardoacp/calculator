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
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
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

const displayResult = function() {
    if (displayValue1 != "" && displayValue2 != "" && operation != "") {
        displayValue1 = operate(parseInt(displayValue1), operation, parseInt(displayValue2));
        display.textContent = displayValue1;
        displayValue2 = "";
        operation = "";
        first = true;
    }
}

let displayValue1 = "";
let displayValue2 = "";

let operation = "";

let first = true;

let digitButtons = document.querySelectorAll(".digit");

let display = document.querySelector("#display")

for (let i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", (ev) => {
        if (first == true) {
            displayValue1 += ev.target.textContent;
            display.textContent = displayValue1;
        }
        else {
            displayValue2 += ev.target.textContent;
            display.textContent = displayValue2;
        } 
    });
}

let operatorButtons = document.querySelectorAll(".operation");

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", (ev) => {
        if (first == true) {
            operation = ev.target.id;
        }
        else {
            displayResult();
            operation = ev.target.id;
        }
        first = false;
    });
}

let operateButton = document.querySelector("#equals");

operateButton.addEventListener("click", displayResult);