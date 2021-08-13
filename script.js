//DECLARE VARIABLES

//display
const calc = [];
let displayString = "";
let displayExpression = "";
const keyPressedDisplay = document.querySelector('.keyPressDisplay');
const expressionDisplay = document.querySelector('.calc');

//digit buttons
const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnSeven = document.querySelector('.seven');
const btnEight = document.querySelector('.eight');
const btnNine = document.querySelector('.nine');
const btnZero = document.querySelector('.zero');
const btnDecimal = document.querySelector('.decimal');

//operator buttons
const btnAdd = document.querySelector(`.add`);
const btnSubtract = document.querySelector(`.subtract`);
const btnMultiply = document.querySelector(`.multiply`);
const btnDivide = document.querySelector(`.divide`);
const btnEquals = document.querySelector(`.equals`);

//accessory buttons
const btnClear = document.querySelector(`.clear`);
const btnBackspace = document.querySelector('.backspace');
const btnNegative = document.querySelector('.negative');
const btnPercent = document.querySelector(".percent");

// date
const date = document.getElementById("date");

//EVENT LISTENERS - DIGITS
btnOne.addEventListener('click', () => {
    populateDisplay(1);
});

btnTwo.addEventListener('click', () => {
    populateDisplay(2);
});

btnThree.addEventListener('click', () => {
    populateDisplay(3);
});

btnFour.addEventListener('click', () => {
    populateDisplay(4);
});

btnFive.addEventListener('click', () => {
    populateDisplay(5);
});

btnSix.addEventListener('click', () => {
    populateDisplay(6);
});

btnSeven.addEventListener('click', () => {
    populateDisplay(7);
});

btnEight.addEventListener('click', () => {
    populateDisplay(8);
});

btnNine.addEventListener('click', () => {
    populateDisplay(9);
});

btnZero.addEventListener('click', () => {
    populateDisplay(0);
});

btnDecimal.addEventListener('click', () => {
    populateDisplay(".");
});


// EVENT LISTENERS - OPERATORS
btnAdd.addEventListener('click', () => {
    populateDisplay('+');
});

btnSubtract.addEventListener('click', () => {
    populateDisplay('-');
});

btnMultiply.addEventListener('click', () => {
    populateDisplay('*');
});

btnDivide.addEventListener('click', () => {
    populateDisplay('/');
});

btnEquals.addEventListener('click', () => {
    populateDisplay('=');
});


//EVENT LISTENERS - ACCESSORY BUTTONS
btnClear.addEventListener('click', () => {
    //set both display strings to an empty string
    displayExpression = "";
    displayString = "";
    //clear the text content, set displayString back to 0
    expressionDisplay.textContent = "";
    keyPressedDisplay.textContent = "0";
    // clear the array
    calc.length = 0;
});

btnBackspace.addEventListener('click', () => {
    //delete one digit from keyPressedDisplay
    // if only one number make key pressed display say 0
    if (keyPressedDisplay.textContent.length === 1 ) {
        keyPressedDisplay.textContent = "0";
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
        displayString = "";
	}
    // if more than one number delete last number added
    else if (keyPressedDisplay.textContent.length > 1) {
        keyPressedDisplay.textContent = keyPressedDisplay.textContent.slice(0, -1);
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
        displayString = displayString.slice(0, -1);
    }
});

btnNegative.addEventListener('click', () => {
    populateDisplay("+/-");
});


//FUNCTIONS

//add
function add(a, b) {
    let result = parseFloat(a) + parseFloat(b);
    return result;
}

//subtract
function subtract(a, b){
    let result = parseFloat(a) - parseFloat(b);
    return result;
}

//multiply
function multiply(a, b){
    let result = parseFloat(a) * parseFloat(b);
    return result;
    
}

//divide
function divide(a, b){
    if(b == 0){
        return 'ERROR';
    }
    let result = parseFloat(a) / parseFloat(b);
    return result;
}

//operate
function operate(num1, op, num2) {
    console.log("calc contains: " + calc);
    console.log("num1: " + num1);
    console.log("op: " + op);
    console.log("num2: " + num2);
    let result = 0;
    if (op === "+") {
        result = add(num1, num2);
    }
    else if (op === "-") {
        result = subtract(num1, num2);
    }
    else if (op === "*") {
        result =  multiply(num1, num2);
    }
    else if (op === "/") {
        result = divide(num1, num2);
    }

    // if array has a length of 4 and last is another operator
    if (calc.length === 4 && typeof calc[3] === "string") {
        let updater = "";
        updater += result;
        updater += calc[3];
        expressionDisplay.textContent = updater;
        calc.shift();
        calc.shift();
        calc.shift();
        // add result to calc
        calc.unshift(result);
        keyPressedDisplay.textContent = result;
        displayExpression = "";
        displayString = "";
        console.log("first result: " + result);
        return result;
    }
    // if calc[3] is the equals sign, enpty array add result
    else if(calc.length === 3) {
        calc.length = 0;
        calc.push(result);
        calc.shift();
        keyPressedDisplay.textContent = result;
        expressionDisplay.textContent = "";
        displayExpression = "";
        displayString = "";
        console.log("second result: " + result);
        return result;
    }
    console.log("last result is: " + result);
    return result;
}

function populateDisplay(input) {
	let op = "";
    // remove default zero from keyPressedDisplay
    if (keyPressedDisplay.textContent.charAt(0) === "0") {
        keyPressedDisplay.textContent = "";
    }
 
    console.log("input is: " + input);

    switch (input) {
		case "+":
		case "-":
		case "*":
        case "/":
            // check if user tries to enter operator first
            if (displayString.length === 0) {
                break;
            }
            // add input to expression string
            displayExpression += input;
            expressionDisplay.textContent += input;
            // push whats in display string so far to calc array for double digit + numbers
            calc.push(displayString);
            // once an operator is pressed clear display string
            displayString = "";
            keyPressedDisplay.textContent = "";
            // push the operator to calc array
            calc.push(input);
            if (calc.indexOf(input) === 3) {
                calc.shift();
            }
            break;
        case "+/-":
            // multiply by -1
            displayString = parseFloat(displayString * (-1));
            keyPressedDisplay.textContent = parseFloat(keyPressedDisplay.textContent * -1);
            displayExpression = parseFloat(displayExpression * (-1));
            expressionDisplay.textContent = parseFloat(expressionDisplay.textContent * -1);
            break;
        case "=":
            // check if theres a number followed by an operator in calc
            if (calc.length < 3 && typeof calc[1] !== "string") {
                break;
            }
            calc.push(displayString);
            operate(calc[0], calc[1], calc[2]);
            break;
        case ".":
            // check if user already pressed a decimal
            if (displayString.includes(".")) {
                break;
            }
            displayExpression += input;
            expressionDisplay.textContent += input;
            displayString += input;
            break;
        
        // if the input is a number
        default:
        expressionDisplay.textContent += input;
        if (calc.length === 3 && typeof calc[1] === "string") {
            keyPressedDisplay.textContent = "";
        }
        else if (calc.length === 2 && typeof calc[1] === "string") {
            keyPressedDisplay.textContent = "";
        }

        else if (calc.length === 4 && typeof calc[1] === "number") {
            calc.shift();
        }
            
        displayString += input;
        keyPressedDisplay.textContent = displayString;
        displayExpression += input;
    }

    if (calc.length === 4) {
        const x = operate(calc[0], calc[1], calc[2]);
    }
}

date.innerHTML = new Date().getFullYear();