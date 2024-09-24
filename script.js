function adicionar(value) {
    const tela = document.getElementById('caixa');
    tela.value += value;
}

function calcular() {
    document.getElementById('caixa').value = '';
}

function limpar() {
    const display = document.getElementById('');
    try {
        // Usando math.js para avaliar a expressão
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
// function adicionar(valor) {
//     document.getElementById("tela").value += valor
//     let caixa = document.getElementById("caixa")
//     caixa.appendChild(Number(valor))
       
// }
// function calcular() {
//     const resultado =document.getElementById("caixa").value
//     document.getElementById("caixa").value = resultado
// }
// function limpar() {
//     document.getElementById("caixa").value = ""
// }



// para o usocorreto do eval 
//(/^[0-9+\-*/().\s]*$/.test(expressao)