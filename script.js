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
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})

mais.addEventListener("click",(evt)=>{
    if (mais != mais.checkd){
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})
vezes.addEventListener("click",(evt)=>{
    if (vezes != vezes.checkd){
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})
menos.addEventListener("click",(evt)=>{
    if (menos != menos.checkd){
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})
divisao.addEventListener("click",(evt)=>{
    if (divisao != divisao.checkd){
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})
virgula.addEventListener("click",(evt)=>{
    if (virgula != virgula.checkd){
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        p.innerHTML = evt.target.innerHTML
        tela.appendChild(p)
    }
})

