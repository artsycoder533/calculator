//GRAB ELEMENTS

//display
const calc = [];
let displayString = "";
let displayExpression = "";
const keyPressedDisplay = document.querySelector('.keyPressDisplay');
const expressionDisplay = document.querySelector('.calc');
//operators

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
const btnBackspace = document.querySelector('.backspace')

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
})


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
    console.log("backspace clicked");
    console.log(keyPressedDisplay.textContent.length);
    console.log(expressionDisplay.textContent.length)
    //delete one digit from keyPressedDisplay
    // if only one number make key pressed display say 0
    if (
			keyPressedDisplay.textContent.length === 1 &&
			expressionDisplay.textContent.length
		) {
			console.log("inside backspace if");
			keyPressedDisplay.textContent = "0";
			expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
		}
		// if more than one number delete last number added
		else if (keyPressedDisplay.length > 1) {
			console.log("inside backspace else");
			keyPressedDisplay.textContent = keyPressedDisplay.textContent.slice(0, -1);
			expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
		}
});

//FUNCTIONS
//add
function add(a, b) {
    console.log("first num: " + a);
    console.log("second num: " + b);
    let result = parseInt(a) + parseInt(b);
    // calc.length = 0;
    // calc.push(result);
    console.log("in add: " + result);
    console.log("in add calc is: " + calc);
	console.log("in add returned: " + result);
    return result;
}

//subtract
function subtract(a, b){
    let result = parseInt(a) - parseInt(b);
    // calc.length = 0;
    // calc.push(result);
    console.log("in subtract: " + result);
    console.log("in subtract calc is: " + calc);
	console.log("in subtract returned: " + result);
    return result;
}

//multiply
function multiply(a, b){
    let result = parseInt(a) * parseInt(b);
    // calc.length = 0;
    // calc.push(result);
    console.log("in multiply: " + result);
    console.log("in multiply calc is: " + calc);
    console.log("in multiply returned: " + result);
    return result;
    
}

//divide
function divide(a, b){
    if(b === 0){
        return 'ERROR';
    }
    let result = parseInt(a) / parseInt(b);
    // calc.length = 0;
    // calc.push(result);
    console.log("in divide: " + result);
    console.log("in divide calc is: " + calc);
	console.log("in divide returned: " + calc[0]);
    return result;
}

//operate
function operate(num1, op, num2) {
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
        console.log("updater is: " + updater);
        expressionDisplay.textContent = updater;
        // expressionDisplay.textContent += calc[3];
        calc.shift();
        calc.shift();
        calc.shift();
        // add result to calc
        calc.unshift(result);
        console.log("here now");
        keyPressedDisplay.textContent = result;
        console.log("at position calc[1] is: " + calc[1]);
        return result;
    }
    // // if calc[3] is the equals sign, enpty array add result
    else if(calc.length === 3) {
        calc.length = 0;
        calc.push(result);
        console.log("made it here!")
        keyPressedDisplay.textContent = result;
        expressionDisplay.textContent = result;
        return result;
    }
    
}

function populateDisplay(input) {
	let op = "";
    // remove default zero from keyPressedDisplay
    if (keyPressedDisplay.textContent.charAt(0) === "0") {
			console.log("we are now here");
			keyPressedDisplay.textContent = "";
	}
	switch (input) {
		case "+":
		case "-":
		case "*":
		case "/":
            op = input;
            // add input to expression string
            expressionDisplay.textContent += input;
            // push whats in display string so far to calc array for double digit + numbers
            calc.push(displayString);
            // once an operator is pressed clear display string
            displayString = "";
            keyPressedDisplay.textContent = "";
            // push the operator to calc array
			calc.push(op);
			break;
        case "=":
            calc.push(displayString);
            console.log("calc[0] is: " + calc[0]);
            console.log("calc[1] is: " + calc[1]);
            console.log("calc[2] is: " + calc[2]);
			operate(calc[0], calc[1], calc[2]);
            break;
        case ".":
            expressionDisplay.textContent += input;
            keyPressedDisplay.textContent += input;
            break;
        // if the input is a number
        default:
            expressionDisplay.textContent += input;
            // check if first is 0, if so trim
            // if (keyPressedDisplay.textContent.charAt(0) === "0") {
            //     console.log("we are now here");
            //     keyPressedDisplay.textContent = "";
            // }
            keyPressedDisplay.textContent += input;
            displayExpression += input;
            displayString += input;
	}
    console.log("calc contains: " + calc);
	//if calc has a length of 3
	if (calc.length === 4) {
		// check if operand is in the middle call operate
		if (
			typeof calc[0] === "number" &&
			typeof calc[1] === "string" &&
			typeof calc[2] === "number"
        ) {
            console.log("here");
			const x = operate(calc[0], calc[1], calc[2]);
            // displayString.textContent = x;
            // expressionDisplay.textContent = x;
            console.log("here again");
        }   
    }
}