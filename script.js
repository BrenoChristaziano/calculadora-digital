const tela = document.querySelector('#caixa')
const cdn = document.querySelector('#caixadenumeros')
let botoes = [...document.querySelectorAll('.numeros')]
const clear = document.querySelector('#clear')
let mais = document.querySelector('#mais')
let vezes = document.querySelector('#vezes')
let menos = document.querySelector('#menos')
let divisao = document.querySelector('#divisao')
let virgula = document.querySelector('#virgula')
let igual = document.querySelector('#igual')

// Função para criar e adicionar um novo elemento <p> ao contêiner 'tela'
let novoElemento = (conteudo) => {
    let p = document.createElement('p')
    p.setAttribute('class', 'nat')
    p.innerHTML = conteudo
    tela.appendChild(p)
}


let nonovoElemento = (conteudo) => {
    novoElemento(conteudo)
}

cdn.addEventListener("click", (evt) => {
    if (evt.target && evt.target.classList.contains('numeros')) {
        novoElemento(evt.target.innerHTML)
    }   
})

mais.addEventListener("click", (evt) => {
    if (evt.target === mais) {
        novoElemento(evt.target.innerHTML)
    }
})


vezes.addEventListener("click", (evt) => {
    if (evt.target === vezes) {
        novoElemento(evt.target.innerHTML)
    }
})

menos.addEventListener("click", (evt) => {
    if (evt.target === menos) {
        novoElemento(evt.target.innerHTML)
    }
})

divisao.addEventListener("click", (evt) => {
    if (evt.target === divisao) {
        nonovoElemento(evt.target.innerHTML)
    }
})

virgula.addEventListener("click", (evt) => {
    if (evt.target === virgula) {
        nonovoElemento(evt.target.innerHTML)
    }
})

let operacao = null;

mais.addEventListener("click", () => operacao = "soma");
vezes.addEventListener("click", () => operacao = "multiplicacao");
menos.addEventListener("click", () => operacao = "subtracao");
divisao.addEventListener("click", () => operacao = "divisao");

igual.addEventListener("click", () => {
    if (botoes.length < 2) {
        return
    }
    const num1 = Number(botoes[0].textContent);
    const num2 = Number(botoes[1].textContent);

    let resultado;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "divisao":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Erro";
            break;
    }

    tela.textContent = resultado; // Atualiza a tela com o resultado
});