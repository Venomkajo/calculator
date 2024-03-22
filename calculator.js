var number1;
var number2;
var operator = '';
var currentNumber = '';


fullKeypad = document.querySelectorAll('button');
numberDisplay = document.querySelector('.numbers');

fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        updateInput(key.value);
        numberDisplay.innerText = currentNumber;
    });
});

function operate(operator, num1, num2){
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

    if (input === '/' || input === '*' || input === '+' || input === '-' || input === '=' || input === 'C'){
        operator = input;
        return;
    }

    if (!operator){
        number1 = input;
        currentNumber += number1;
    }
    else{
        number2 = input;
        currentNumber += number2;
    }
}