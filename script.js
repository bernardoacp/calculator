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

let displayValue = "";

let digitButtons = document.querySelectorAll(".digit");

let display = document.querySelector("#display")

for (let i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", (ev) => {
        displayValue += ev.target.textContent;
        display.textContent += ev.target.textContent; 
    });
}