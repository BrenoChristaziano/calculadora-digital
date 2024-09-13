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
    if (evt.target === mais) {
        novoElemento(evt.target.innerHTML)
    }else if (evt.target && evt.target.classList.contains('numeros')) {
        novoElemento(evt.target.textContent)
    }
})
let numeros = [];
let operacao = null;

// Adiciona números ao array e exibe na tela
cdn.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('numeros')) {
        const numero = evt.target.textContent;
        tela.textContent += numero; // Adiciona o número à tela
    } else if (evt.target === mais) {
        operacao = "soma";
        numeros.push(Number(tela.textContent));
        tela.textContent = ''; // Limpa a tela para o próximo número
    }
});

// Realiza a operação quando o botão igual é clicado
igual.addEventListener("click", () => {
    if (tela.textContent !== '') {
        numeros.push(Number(tela.textContent)); // Adiciona o último número

        if (numeros.length < 2) {
            tela.textContent = "Erro: Insuficientes valores";
            return;
        }

        let num1 = numeros[0];
        let num2 = numeros[1];
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
                if (num2 === 0) {
                    resultado = "Erro: Divisão por zero";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Erro: Operação inválida";
                break;
        }

        tela.textContent = resultado;
        numeros = []; // Limpa os números para a próxima operação
        operacao = null; // Limpa a operação selecionada
    }
});


// vezes.addEventListener("click", (evt) => {
//     if (evt.target === vezes) {
//         novoElemento(evt.target.innerHTML)
//     }
// })

// menos.addEventListener("click", (evt) => {
//     if (evt.target === menos) {
//         novoElemento(evt.target.innerHTML)
//     }
// })

// divisao.addEventListener("click", (evt) => {
//     if (evt.target === divisao) {
//         nonovoElemento(evt.target.innerHTML)
//     }
// })

// virgula.addEventListener("click", (evt) => {
//     if (evt.target === virgula) {
//         nonovoElemento(evt.target.innerHTML)
//     }
//})