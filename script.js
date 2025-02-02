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
        button === 'divide' ||
        button === 'precent'
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
    if (shouldResetDisplay) {
        displayValue = 0; // Reset to a number, not a string
        shouldResetDisplay = false;
    }

    // Prevent leading zeros
    displayValue = displayValue === 0 ? number : parseFloat(displayValue + number);

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
        firstNumber = parseFloat(displayValue); // Ensure firstNumber is stored as a number
    } else { 
        calculateResult()   // If first number exists, perfom calculation before storing new operator
        firstNumber = parseFloat(displayValue);
    }

    // Store operator and prepare for next number input
    operator = selectedOperator;
    shouldResetDisplay = true;
    console.log("firstNumber: " + firstNumber + " operator: " + operator + " shouldResetDisplay: " + shouldResetDisplay);
};

const calculateResult = function() {
    if (firstNumber === null || operator === null) {
        return;
    }

    secondNumber = parseFloat(displayValue);

    switch (operator) {
        case "add":
            displayValue = firstNumber + secondNumber;
            break;
        case "subtract":
            displayValue = firstNumber - secondNumber;
            break;
        case "multiply":
            displayValue = firstNumber * secondNumber;
            break;
        case "divide":
            if (secondNumber === 0) {
                alert("It is not mathematically possible to divide by 0");
                return;
            }
            displayValue = firstNumber / secondNumber;
            break;
        case "percent":
            displayValue = firstNumber * (secondNumber / 100);
            break;
    }

    display.textContent = displayValue;

    // Store result as firstNumber to allow continued operations
    firstNumber = displayValue;
    operator = null;
    shouldResetDisplay = true;
};


const clearCalculator = function() {
    displayValue = 0;
    firstNumber = null;
    operator = null;
    shouldResetDisplay = false;

    display.textContent = displayValue;
};

const toggleSign = function() {
    displayValue = parseFloat(displayValue) * -1;

    display.textContent = displayValue;
    console.log('u pressed +/-');
};

const appendDecimal = function() {
    console.log('u pressed the decimal point');
};
