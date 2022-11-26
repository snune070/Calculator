const toDisplay = document.querySelectorAll('.numbers');
const eraseDisplay = document.querySelector('.clear')
const deleteInput = document.querySelector('.delete')

let currentDisplay = document.querySelector('.current')

eraseDisplay.addEventListener('click', function () {
    currentDisplay.textContent = '';
})

deleteInput.addEventListener('click', function () {
    console.log(currentDisplay.textContent)
    currentDisplay.textContent = currentDisplay.textContent.substring(0, currentDisplay.textContent.length - 1)
    console.log(currentDisplay.textContent)
})

for (let toDisplayElement of toDisplay) {
    toDisplayElement.addEventListener('click', function () {
        currentDisplay.textContent += `${toDisplayElement.innerText}`
    })
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
    return x / y;
}

function operate(operation, x, y) {
    switch (operation) {
        case "add":
            return add(x, y);
        case "subtract":
            return subtract(x, y);
        case "multiply":
            return multiply(x, y);
        case "divide":
            return divide(x, y);
    }
}



