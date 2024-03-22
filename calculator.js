var number1;
var number2;
var operator;


fullKeypad = document.querySelectorAll('button');
numberDisplay = document.querySelector('.numbers');

fullKeypad.forEach(key => {
    key.addEventListener('click', function(){
        numberDisplay.innerText = key.value;
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