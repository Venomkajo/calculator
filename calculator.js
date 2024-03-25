var number1 = '';
var number2 = '';
var operator = '';
var currentNumber = '';
var equal = 0;
var operatorCopy = '';


const fullKeypad = document.querySelectorAll('button');
const numberDisplay = document.querySelector('.numbers');
const periodButton = document.getElementById('period');

fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        updateInput(key.value);
        checkForPeriod();
        if (equal === 1){
            equal = 0;
            let result = operate();
            if (!result){
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
        }}
    );
});

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
}

function updateInput(input){
    if (input === 'UNDO'){
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
        }else{
            equal = 1;
            operatorCopy = input;
        }
    }
    else if (input === '='){
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
    }

function clear(){
    number1 = '';
    number2 = '';
    currentNumber = '';
    operator = '';
    equal = 0;
}

function checkForPeriod(){
    if ((!operator && number1.includes('.')) || (number2.includes('.') && operator)){
        periodButton.disabled = true;
    }else{
        periodButton.disabled = false;
    }
}

function isNegative(){
    if ((!operator && number1.includes('-'))){
        return 'number1';
    }else if (number2.includes('-') && operator){
        return 'number2';
    }else{
        return false;
    }
}