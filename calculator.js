var number1 = '';
var number2 = '';
var operator = '';
var currentNumber = '';
var equal = 0;
var operatorCopy = '';


const fullKeypad = document.querySelectorAll('button');
const numberDisplay = document.querySelector('.numbers');

fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        updateInput(key.value);
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
            numberDisplay.innerText = result;
            number1 = result;
        }else if (!operator){
            numberDisplay.innerText = operator + '  ' + number1;
        }else{
            numberDisplay.innerText = operator + '  ' + number2;
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
    if (input === '/' || input === '*' || input === '+' || input === '-'){
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
    else if (!operator){
        number1 += input;
    }
    else{
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