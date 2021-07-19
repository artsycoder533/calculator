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
    populateDisplay('1');
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
    populateDisplay('x');
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
});

//FUNCTIONS
//add
function add(a, b){
    let result = parseInt(a) + parseInt(b);
    calc.length = 0;
    calc.push(result);
    return calc[0];
}

//subtract
function subtract(a, b){
    return a - b;
}

//multiply
function multiply(a, b){
    return a * b;
}

//divide
function divide(a, b){
    if(b === 0){
        return 'ERROR';
    }
    return a / b;
}

//operate
function operate(arr){
    let x = arr[0];
    let operator = arr[1];
    let y = arr[2];
    switch (operator){
        case "+" :
            displayString = add(x, y);
            console.log(displayString);
            keyPressedDisplay.textContent = `${displayString}`;
            //update display string with result
            break;
        case "-" :
            return subtract(x, y);
            break;
        case "*" :
            return multiply(x, y);
            break;
        case "/":
            return divide(x, y);
            break;
        default:
            return x;
    }
}


function populateDisplay(num){
    let first = '';
    let second = '';
    let op = '';
    
    switch (num){
        case '+' :
        case '-' :
        case '*' :
        case '/':
            op = num;
            displayExpression += num;
            expressionDisplay.textContent = `${displayExpression}`;
            calc.push(displayString);
            calc.push(num);
            displayString = '';
            console.log(calc);
            break;
        case "=":
            calc.push(displayString);
            console.log(`display string= ${displayString}`);
            console.log(calc);
            operate(calc);
            break;
        default:
            //if button pressed is a digit
            //displays entire mathematical expression at the top of display
            //displays the current digits pressed at the bottom of the display
            displayExpression += num;
            displayString += num;
            expressionDisplay.textContent = `${displayExpression}`;
            keyPressedDisplay.textContent = `${displayString}`;
    }    
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