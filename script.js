let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;

let btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(button.value);
    });
});

const handleButtonClick = function(button) {
    console.log(button);
    if (!isNaN(button)) {
        appendNumber(button);
    } else if (
        button === "add" || 
        button === "subtract" || 
        button === "multiply" || 
        button === "divide"
    ) {
        chooseOperator(button);
    } else if (button === "equals") {
        calculateResult();
    } else if (button === "clear") {
        clearCalculator();
    } else if (button === "toggle-sign") {
        toggleSign();
    } else if (button === "decimal") {
        appendDecimal()
    }
};

const appendNumber = function(number) {
    console.log("you clicked number" + " " + number);
};

const chooseOperator = function(operator) {
    console.log("u selected a operator button" + " " + operator);
};

const calculateResult = function() {
    console.log("you pressed equals");
};

const clearCalculator = function() {
    console.log("u pressed all clear");
};

const toggleSign = function() {
    console.log("u pressed +/-");
};

const appendDecimal = function() {
    console.log("u pressed the decimal point");
};
