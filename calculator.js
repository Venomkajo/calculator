// declare global variables
var number1 = '';
var number2 = '';
var operator = '';
var equal = 0;
var operatorCopy = '';

// get website data
const fullKeypad = document.querySelectorAll('button');
const numberDisplay = document.querySelector('.numbers');
const periodButton = document.getElementById('period');

// for every button press do this
fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        start(key.value);
    });
});

// handling keyboard presses
document.addEventListener('keydown', function(event){
    console.log(event.key);
    if ((!isNaN(Number(event.key)) || ['/', '*', '+', '-', '=', 'Enter', 'Backspace'].includes(event.key)) && event.key !== ' ') {
        start(event.key);
}});

// main program
function start(value){
    updateInput(value);
    checkForPeriod();
    if (equal === 1){
        equal = 0;
        let result = operate();
        if (!result && result !== 0){
            return;
        }
        if (result % !0){
            result = result.toFixed(2);
        }
        clear();
        if (operatorCopy){
            operator = operatorCopy;
            operatorCopy = '';
        }
        numberDisplay.innerText = result + '    ' + operator;
        number1 = result;
        checkForPeriod();
    }else if (!operator){
        numberDisplay.innerText = operator + '  ' + number1;
    }else{
        numberDisplay.innerText = number1 + '   ' + operator + '  ' + number2;
    }};

// get result from numbers and operator
function operate(){

    if (!number1 || !number2){
        return '';
    }

    let num1 = Number(number1);
    let num2 = Number(number2);
  
    if (operator === '+'){
        return num1 + num2;
    }
    else if (operator === '-'){
        return num1 - num2;
    }
    else if (operator === '*'){
        return num1 * num2;
    }
    else if (operator === '/'){
        return num1 / num2;
    }
    else{
        return 'ERROR';
    }
};

// get input from the button
function updateInput(input){
    if (!input){
        return;
    }
    else if (input === 'UNDO' || input === 'Backspace'){
        if (number1.length > 0 && !operator){
            number1 = number1.slice(0, -1);
        }else if (number2.length > 0 && operator){
            number2 = number2.slice(0, -1);
        }
    }
    else if (input === 'negative'){
        if (isNegative() === 'number1'){
            number1 = number1.slice(1);
        }else if (isNegative() === 'number2'){
            number2 = number2.slice(1);
        }else if (isNegative() === false){
            if (!operator){
                number1 = '-' + number1;
            }else
            {
                number2 = '-' + number2;
            }
        }
    }
    else if ((input === '/' || input === '*' || input === '+' || input === '-') && number1){
        if (!operator && !number2){
            operator = input;
        }else if (operatorCopy){
            equal = 1;
            operatorCopy = input;
        }
    }
    else if (input === '=' || input === 'Enter'){
        equal = 1;
    }
    else if (input === 'C'){
        clear();
    }
    else if(input === '.'){
        if (!operator && number1){
            number1 += input;
        }else if (operator && number2)
        {
            number2 += input;
        }
    }
    else if (!operator && !isNaN(Number(input))){
            number1 += input;
        }
    else if (!isNaN(Number(input))){
            number2 += input;
        }
    };

// clear every variable
function clear(){
    number1 = '';
    number2 = '';
    operator = '';
};

// check if period already exists in the current number
function checkForPeriod(){
    if (!operator && number1.indexOf('.') !== -1 || (number2.indexOf('.') !== -1 && operator)){
        periodButton.disabled = true;
    }else{
        periodButton.disabled = false;
    }
};

// check if number is negative
function isNegative(){
    if (!operator && number1.indexOf('-') !== -1){
        return 'number1';
    }else if (number2.indexOf('-') !== -1 && operator){
        return 'number2';
    }else{
        return false;
    }
};