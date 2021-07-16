//add
function add(a, b){
    return a + b;
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
function operate(x, y, operator){
    switch (operator){
        case "+" :
            return add(x, y);
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

add(1, 2);
subtract(10, 2);
multiply(2, 3);
divide(9, 3);
operate(2, 3, '+');
operate(3,2, '-');
operate(3,3, '*');
operate(3,0, '/');
operate(9,3, '/');
operate(2,3,'$');