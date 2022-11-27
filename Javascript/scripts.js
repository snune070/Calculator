const numbers = document.querySelectorAll('.numbers');
const eraseDisplay = document.querySelector('.clear');
const deleteInput = document.querySelector('.delete');
const operations = document.querySelectorAll('.operations');


let fistInput = document.querySelector('.current');
let secondInput = document.querySelector('.current')

const currentDisplay = document.querySelector('.current');
const previousDisplay = document.querySelector('.last');


eraseDisplay.addEventListener('click', () => clearDisplay());
deleteInput.addEventListener('click', () => deleteFromDisplay());

numbers.forEach(button => button.addEventListener('click', () => appendToDisplay(button.textContent)))

operations.forEach(button => button.addEventListener('click', () => {
    chooseOperation(button.textContent);
}))

function clearDisplay() {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
}


function deleteFromDisplay() {
    currentDisplay.innerText = currentDisplay.innerText.substring(0, currentDisplay.innerText.length - 1);
}


function appendToDisplay(input) {
    if (input === '.' && currentDisplay.textContent.includes('.'))
        return;
    currentDisplay.textContent += input;

}


function chooseOperation(operation) {
    if (currentDisplay.textContent === '')
        return
    if (previousDisplay.textContent !== '') {
        secondInput.textContent = currentDisplay.textContent;
        let operationOutput = evaluateOperation(operation, firstInput, secondInput.textContent)
        appendToDisplay(operationOutput)
    }
    firstInput = currentDisplay.textContent;
    previousDisplay.textContent = `${fistInput.textContent} ${operation}`;
    currentDisplay.textContent = '';
}

function evaluateOperation(operand, x, y) {

    currentDisplay.textContent = '';

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
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
    return parseInt(x) * parseInt(y);
}

function divide(x, y) {
    return parseInt(x) / parseInt(y);
}

