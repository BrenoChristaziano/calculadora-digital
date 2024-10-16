let clicado = false

let tela= document.getElementById('caixa')
// os botões para serem clicados
function appendToDisplay(value) {
    tela.value += value
}
//Apagar m numero
function clearDisplay() {
    if(clicado == true){
        tela.value = ''
        clicado = false
    }else{
        tela.value = tela.value.slice(0, -1)
    }
}
//Calcular um numero
function calculateResult() {
    const expression = tela.value
    let result

    try {
        result = calculate(expression)
        tela.value = result    
    } catch (error) {
        tela.value = 'Erro'
    }
}
//As oprações Matmaticas
function calculate(expression) {
    clicado = true
    const numbers = expression.split(/[\+\-\*\/]/).map(Number)
    const operators = expression.split(/[0-9]+/).filter(Boolean)

    if (numbers.length !== operators.length + 1) {
        throw new Error('Erro na expressão')
    }

    let total = numbers[0]

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                total += numbers[i + 1]
                break
            case '-':
                total -= numbers[i + 1]
                break
            case '*':
                total *= numbers[i + 1]
                break
            case '/':
                if (numbers[i + 1] === 0) {
                    throw new Error('Divisão por zero')
                }
                total /= numbers[i + 1]
                break
        }
    }

    return total
}
