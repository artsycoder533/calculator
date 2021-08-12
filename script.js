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

//operator buttons
const btnAdd = document.querySelector(`.add`);
const btnSubtract = document.querySelector(`.subtract`);
const btnMultiply = document.querySelector(`.multiply`);
const btnDivide = document.querySelector(`.divide`);
const btnEquals = document.querySelector(`.equals`);

//accessory buttons
const btnClear = document.querySelector(`.clear`);

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

//FUNCTIONS
//add
function add(a, b){
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
        updater += calc[1];
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
    // else {
    //     calc.length = 0;
    //     calc.push(result);
    //     console.log("calc[3] is an operator here!")
    //     keyPressedDisplay.textContent = result + calc[3];
    //     expressionDisplay.textContent = result;
    //     return result;
    // }
    
}

function populateDisplay(input) {
	let op = "";

	switch (input) {
		case "+":
		case "-":
		case "*":
		case "/":
			op = input;
			expressionDisplay.textContent += input;
			calc.push(op);
			break;
		case "=":
			operate(calc[0], calc[1], calc[2]);
			break;
		default:
			expressionDisplay.textContent += input;
			keyPressedDisplay.textContent = input;
			displayExpression += input;
			calc.push(input);
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


    // else if (calc.length === 4 && typeof calc[3] === "string") {
    //     console.log("if continued expression, calc contains: " + calc);
    //     calc.push(calc[3]);
        


	// }
	// // if calc[0] is a number and the next number pushed is a number
    // else if (typeof calc[0] === "number" && typeof calc[1] === "number") {
    //     // remove the first element(result from previous calculation)
    //     calc.shift();
    //     // remove first number from expression Display
    //     expressionDisplay.textContent += calc[3];
    //     expressionDisplay.textContent = input;
    //     console.log("hereeee");
        
    // }
    // else if (dfdf) {
        
    // }
}


// add(1, 2);
// subtract(10, 2);
// multiply(2, 3);
// divide(9, 3);
// operate(2, 3, '+');
// operate(3,2, '-');
// operate(3,3, '*');
// operate(3,0, '/');
// operate(9,3, '/');
// operate(2,3,'$'); 