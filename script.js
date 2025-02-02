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

let display = document.querySelector('.display');

const handleButtonClick = function(button) {
    console.log(button);
    if (!isNaN(button)) {
        appendNumber(button);
    } else if (
        button === 'add' || 
        button === 'subtract' || 
        button === 'multiply' || 
        button === 'divide'
    ) {
        chooseOperator(button);
    } else if (button === 'equals') {
        calculateResult();
    } else if (button === 'clear') {
        clearCalculator();
    } else if (button === 'toggle-sign') {
        toggleSign();
    } else if (button === 'decimal') {
        appendDecimal()
    }
};

const appendNumber = function(number) {
    // If we need to reset the display (after an operator or "="), clear it first
    if (shouldResetDisplay === true) {
        displayValue = 0;
        shouldResetDisplay = false;
    }

    // Prevent leading zeros: If displayValue is 0, replace it with the new number
    if (displayValue === 0) {
        displayValue = number;
    } else {
        displayValue = displayValue + number;   // Append the clicked number to the existing display value
    }

    // Update the calculator screen with the new value
    display.textContent = displayValue;
};

const chooseOperator = function(selectedOperator) {
    // If an operator is already selected & we're resetting the display, update the operator only
    if (operator !== null && shouldResetDisplay){
        operator = selectedOperator;
        console.log("change to operator " + operator);
        return;
    }

    // Store first number if not already set
    if (firstNumber === null) {
        firstNumber = displayValue;
    } else { 
        calculateResult()   // If first number exists, perfom calculation before storing new operator
    }

    // Store operator and prepare for next number input
    operator = selectedOperator;
    shouldResetDisplay = true;
    console.log("firstNumber: " + firstNumber + " operator: " + operator + " shouldResetDisplay: " + shouldResetDisplay);
};

const calculateResult = function() {
    console.log('you pressed equals');
};

const clearCalculator = function() {
    console.log('u pressed all clear');
};

const toggleSign = function() {
    console.log('u pressed +/-');
};

const appendDecimal = function() {
    console.log('u pressed the decimal point');
};
