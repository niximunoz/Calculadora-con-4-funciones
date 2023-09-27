const display = document.getElementById("display");
let number1 = "";
let number2 = "";
let operator = "";

function clr() {
    number1 = "";
    number2 = "";
    operator = "";
    display.innerHTML = "0";
}

function press(numberIn) {
    number1 += numberIn;
    display.innerHTML = number1;
}

function setOP(op) {
    operator = op;
    number2 = number1;
    number1 = "";
}

function calculate() {
    let result = 0;
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);

    if(operator == '+'){
        result = num2 + num1;
    }else if(operator == '-'){
        result = num2 - num1;
    }else if(operator == '*'){
        result = num2 * num1;
    }else if(operator == '/'){
        result = num2 / num1;
    }
    number1 = result;
    display.innerHTML = result;
    operator = "";
}