let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    const expression = display.value;
    let result;

    try {
        result = calculate(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

function calculate(expression) {
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    const operators = expression.split(/[0-9]+/).filter(Boolean);

    if (numbers.length !== operators.length + 1) {
        throw new Error('Erro na expressão');
    }

    let total = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                total += numbers[i + 1];
                break;
            case '-':
                total -= numbers[i + 1];
                break;
            case '*':
                total *= numbers[i + 1];
                break;
            case '/':
                if (numbers[i + 1] === 0) {
                    throw new Error('Divisão por zero');
                }
                total /= numbers[i + 1];
                break;
        }
    }

    return total;
}
