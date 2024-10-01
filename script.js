let tela= document.getElementById('caixa')

function appendToDisplay(value) {
    tela.value += value
}

let verificação_click = false
const resultado = document.querySelector("#igual")
function clearDisplay() {
    if(verificação_click) { //Verifica se o botão foi clicado
        resultado.innerHTML = "Ac"
        tela.value = ''
        verificação_click = false
    }else{
        tela.value = tela.value.slice(0,-1)
    }
}
resultado.addEventListener("click", () => {
    isEqualButtonClicked = true // Marca que o botão foi clicado
    clearDisplay() // Chama a função para limpar ou calcular
})
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

function calculate(expression) {
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
