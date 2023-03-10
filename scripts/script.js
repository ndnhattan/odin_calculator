function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(x, a, b) {
    if (x == "÷")
        return divide(a, b);
    else if (x == "x")
        return multiply(a, b);
    else if (x == "+")
        return add(a, b);
    else 
        return subtract(a, b);
}

const display = document.querySelector(".display");
let displayValue = "";
let a = "", b = "", operator;
let preOperator = "";

const numberBtns = document.querySelectorAll(".btnNumber");
numberBtns.forEach((number) => {
    number.addEventListener("click", () => {
        displayValue += number.classList[2].charAt(1);
        display.textContent = displayValue;
    });
});

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (preOperator == "") {
            if (a == "")
                a = parseInt(displayValue);
            operator = displayValue = operatorBtn.classList[2].charAt(1);
            display.textContent = displayValue;
            displayValue = "";
            preOperator = operator;
        } else {
            b = parseInt(displayValue);
            displayValue = "" + operate(preOperator, a, b);
            a = operate(preOperator, a, b);
            preOperator = operator = operatorBtn.classList[2].charAt(1);
            display.textContent = displayValue;
            displayValue = "";
            b = "";
        }
    });
});

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    b = parseInt(displayValue);
    displayValue = "" + operate(operator, a, b);
    display.textContent = displayValue;
    displayValue = "";
    a = operate(operator, a, b);
    b = "";
    preOperator = "";
});