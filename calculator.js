var number1 = '';
var number2 = '';
var operator = '';
var currentNumber = '';
var equal = 0;


fullKeypad = document.querySelectorAll('button');
numberDisplay = document.querySelector('.numbers');

fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        updateInput(key.value);
        if (equal === 1){
            equal = 0;
            let result = operate();
            clear();
            numberDisplay.innerText = result;
            number1 = result;
        }else if (!operator){
            numberDisplay.innerText = number1;
        }else{
            numberDisplay.innerText = number2;
        }}
    );
});

function operate(){

    let num1 = Number(number1);
    let num2 = Number(number2);

    if (operator === 'C'){
        clear();
    }    
    else if (operator === '+'){
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
    if (input === '/' || input === '*' || input === '+' || input === '-' || input === 'C'){
        operator = input;
    }
    else if (input === '='){
        equal = 1;
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
}