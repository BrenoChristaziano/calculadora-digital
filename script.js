function adicionar(valor) {
     document.getElementById("tela").value += valor
     let caixa = document.getElementById("caixa")
    caixa.appendChild(Number(valor))
       
}
function calcular() {
    const resultado =document.getElementById("caixa").value
    document.getElementById("caixa").value = resultado
}
function limpar() {
    document.getElementById("caixa").value = ""
}
