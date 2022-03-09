//buscando UL com as opções do menu
let menuOpcoes = document.querySelector(".menulist")

//adicionando listener de evento
menuOpcoes.addEventListener("click" ,identificarOpcoes)

//executar ação após o clique
function identificarOpcoes(event) {

    //identificando o elemento que foi clicado
    let elemento = event.target

    //verificando se é LI
    if(elemento.tagName == 'A') {

        //recuperando ID
        let id = elemento.id

        //selecionando uma seção através do ID
        let secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        //removendo classe mostrar
        removeClasseMostrar()

        //adicionando classe
        secaoEscolha.classList.add("mostrar")

        
    }
}

function removeClasseMostrar() {
    let divs = document.querySelectorAll(".conteudo .geral div")
    
    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("mostrar")
        
    }
}