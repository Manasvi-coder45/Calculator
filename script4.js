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

let expression = "";
let display = document.getElementById("input");

function appendToExpression(value) {
    expression += value;
    display.textContent = expression;
}

function calculate() {
    try {
        modified_expression = expression.replace('x', '*');
        let result = eval(modified_expression); //predefined function in JS
        display.textContent = result;
        expression = result.toString();
    } catch (error) {
        display.textContent = "Error";
        expression = "";
    }
}

function clearExpression() {
    expression = "";
    display.textContent = "";
}

nine.addEventListener("click", () => appendToExpression("9"));
eight.addEventListener("click", () => appendToExpression("8"));
seven.addEventListener("click", () => appendToExpression("7"));
six.addEventListener("click", () => appendToExpression("6"));
five.addEventListener("click", () => appendToExpression("5"));
four.addEventListener("click", () => appendToExpression("4"));
three.addEventListener("click", () => appendToExpression("3"));
two.addEventListener("click", () => appendToExpression("2"));
one.addEventListener("click", () => appendToExpression("1"));
zero.addEventListener("click", () => appendToExpression("0"));

plus.addEventListener("click", () => appendToExpression("+"));
minus.addEventListener("click", () => appendToExpression("-"));
multiply.addEventListener("click", () => appendToExpression("x"));
divide.addEventListener("click", () => appendToExpression("/"));

equals.addEventListener("click", () => calculate());
clear.addEventListener("click", () => clearExpression());