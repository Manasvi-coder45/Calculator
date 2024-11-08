//Calculating for two operands.
let nine = document.getElementById("9");
let eight = document.getElementById("8");
let seven = document.getElementById("7");
let six = document.getElementById("6");
let five = document.getElementById("5");
let four = document.getElementById("4");
let three = document.getElementById("3");
let two = document.getElementById("2");
let one = document.getElementById("1");

let clear = document.getElementById("C");
let zero = document.getElementById("0");
let equals = document.getElementById("=");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let multiply = document.getElementById("x");
let divide = document.getElementById("/");

let operand1 = null;
let operand2 = null;
let operator = null;
let isOperatorSet = false;

let display = document.getElementById("input");

function appendNumber(number) {
    if (isOperatorSet) {
        display.textContent = "";
        isOperatorSet = false;
    }
    display.textContent += number;
}

function setOperator(op) {
    if (operand1 === null) {
        operand1 = parseFloat(display.textContent);
    }
    operator = op;
    display.textContent += ` ${operator} `;
    isOperatorSet = true;
}

function calculate() {
    operand2 = parseFloat(display.textContent);
    let calc;
    switch (operator) {
        case '+':
            calc = operand1 + operand2;
            break;
        case '-':
            calc = operand1 - operand2;
            break;
        case 'x':
            calc = operand1 * operand2;
            break;
        case '/':
            calc = operand2 !== 0 ? operand1 / operand2 : "Error";
            break;
        default:
            calc = "Error";
    }

    display.textContent = calc;
    operand1 = calc;
    operand2 = null;
    operator = null;
}

nine.addEventListener("click", () => appendNumber(9));
eight.addEventListener("click", () => appendNumber(8));
seven.addEventListener("click", () => appendNumber(7));
six.addEventListener("click", () => appendNumber(6));
five.addEventListener("click", () => appendNumber(5));
four.addEventListener("click", () => appendNumber(4));
three.addEventListener("click", () => appendNumber(3));
two.addEventListener("click", () => appendNumber(2));
one.addEventListener("click", () => appendNumber(1));
zero.addEventListener("click", () => appendNumber(0));

clear.addEventListener("click", () => {
    document.getElementById("input").textContent = "";
    operand1 = operand2 = operator = null;
    isOperatorSet = false;
});

plus.addEventListener("click", () => setOperator("+"));
minus.addEventListener("click", () => setOperator("-"));
multiply.addEventListener("click", () => setOperator("x"));
divide.addEventListener("click", () => setOperator("/"));
equals.addEventListener("click", () => calculate());