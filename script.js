let firstNumber = '';
let secondNumber = '';
let operand = '';
let displayValue = '';

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', del);

numberBtn.forEach(item => {
    item.addEventListener('click', () => appendNumber(item.textContent));
});

operatorBtn.forEach(item => {
    item.addEventListener('click', () => setOperation(item.textContent));
});

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) return null;
            else return divide(num1, num2);
        default:
            return null;
    }
}

function appendNumber(num) {
    if (display.textContent == 0 && num == 0) return display.textContent = 0;
    if (firstNumber !== '') displayValue = '';
    displayValue += num;
    return display.textContent = displayValue;
}

function clear() {
    firstNumber = '';
    secondNumber = '';
    operand = '';
    display.textContent = '0';
    displayValue = '';
}

function setOperation(operator) {
    if (firstNumber !== '') evaluate();
    switch (operator) {
        case '÷':
            operand = '/';
            break;
        case 'x':
            operand = '*';
            break;
        default:
            operand = operator;
            break
    }
    firstNumber = display.textContent;
    display.textContent = firstNumber;
}

function evaluate() {
    if (display.textContent == 0) return display.textContent = 0;
    if (firstNumber === '') return display.textContent = displayValue;
    secondNumber = display.textContent;
    display.textContent = operate(operand, firstNumber, secondNumber);
}

function del() {
    if (display.textContent.length === 1 || display.textContent == 0) {
        displayValue = '';
        return display.textContent = 0;
    };
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    return displayValue = display.textContent;
}