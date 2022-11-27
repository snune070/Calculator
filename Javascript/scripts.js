const numbers = document.querySelectorAll('.numbers');
const eraseDisplay = document.querySelector('.clear');
const deleteInput = document.querySelector('.delete');
const operations = document.querySelectorAll('.operations');
const evaluateExpression = document.querySelector('#equal')
const currentDisplay = document.querySelector('.current');
const previousDisplay = document.querySelector('.last');

let currentCalculation = null;
let toReset = false;
let firstInput = document.querySelector('.current');
let secondInput = document.querySelector('.current');


window.addEventListener('keypress', writeToDisplay)


eraseDisplay.addEventListener('click', () => clearDisplay());
deleteInput.addEventListener('click', () => deleteFromDisplay());

numbers.forEach(button => button.addEventListener('click', () => appendToDisplay(button.textContent)))


operations.forEach(button => button.addEventListener('click', () => {
    determineOperation(button.textContent);
}))

evaluateExpression.addEventListener('click', () => evaluateOperation())

function clearDisplay() {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
    toReset = false
    currentCalculation = null;
}

function reset() {
    currentDisplay.textContent = '';
    toReset = false;
}

function deleteFromDisplay() {
    currentDisplay.innerText = currentDisplay.innerText.substring(0, currentDisplay.innerText.length - 1);
}


function appendToDisplay(input) {
    if (input === '.' && currentDisplay.textContent.includes('.'))
        return;
    if (toReset) {
        reset()
        toReset = false;
    }
    currentDisplay.textContent += input;

}


function determineOperation(operation) {

    if (currentCalculation !== null)
        evaluateOperation();

    if (currentDisplay.textContent === '')
        return

    currentCalculation = operation;
    firstInput = currentDisplay.textContent;
    previousDisplay.textContent = `${firstInput} ${currentCalculation}`
    toReset = true;

}

function evaluateOperation() {

    if (!toReset)
        toReset = true;
    secondInput = currentDisplay.textContent;

    currentDisplay.textContent = roundNumber((calculateOutput(currentCalculation, firstInput, secondInput)))
    previousDisplay.textContent = `${currentDisplay.textContent} =`
    currentCalculation = null;

}

function roundNumber(roundedNumber) {
    roundedNumber = Math.round(calculateOutput(currentCalculation, firstInput, secondInput) * 1000) / 1000;
    return roundedNumber;
}


function writeToDisplay(e) {

    //Keyboard Numbers
    if (e.key >= 0 && e.key <= 9)
        appendToDisplay(e.key)
    if (e.key === '.')
        appendToDisplay(e.key)
    if (e.key === '/') {
        determineOperation("÷")
    }

    //Keyboard Operations
    if (e.key === '*')
        determineOperation(e.key)
    if (e.key === '+')
        determineOperation(e.key)
    if (e.key === '-')
        determineOperation(e.key)
    if (e.key === '=')
        evaluateOperation();

    if (e.key === 'Enter')
        evaluateOperation();
}

function calculateOutput(operand, x, y) {

    x = Number(x)
    y = Number(y);

    switch (operand) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
    }

}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) return alert("Can't divide by zero, clear calculator");
    return x / y;
}

/*
if(currentCalculation !== null)

    if (currentDisplay.textContent === '')
        return
if (previousDisplay.textContent !== '') {
    secondInput.textContent = currentDisplay.textContent;
    let operationOutput = evaluateOperation(operation, firstInput.textContent, secondInput.textContent)
    appendToDisplay(operationOutput)
}
firstInput.textContent = currentDisplay.textContent;
previousDisplay.textContent = `${firstInput.textContent} ${operation}`;
currentDisplay.textContent = '';*/
