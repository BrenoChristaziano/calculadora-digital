const tela = document.querySelector('#caixa')
const cdn = document.querySelector('#caixadenumeros')
let botoes = [...document.querySelectorAll('.numeros')]
const clear = document.querySelector('#clear')
const mais = document.querySelector('#mais')
const vezes = document.querySelector('#vezes')
const menos = document.querySelector('#menos')
const divisao = document.querySelector('#divisao')
const virgula = document.querySelector('#virgula')
const igual = document.querySelector('#igual')



cdn.addEventListener("click", (evt) => {
    if (evt.target && evt.target.classList.contains('numeros')) {
        let p = document.createElement('p');
        p.setAttribute('class', 'nat');
        p.innerHTML = evt.target.innerHTML;
        tela.appendChild(p);
    }
});