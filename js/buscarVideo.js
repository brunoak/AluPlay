import {conectaApi} from "./conectaApi.js";
import constroiCard from "./mostraVideos.js"

async function buscaVideo(evento) {
    evento.preventDefault();

    let campoBusca = document.querySelector("[data-pesquisa]").value;
    let busca = await conectaApi.pesquisaVideos(campoBusca);
    console.log(busca)

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esses termos<h2>`
    }
}

let botao = document.querySelector("[data-botao]")
botao.addEventListener("click", evento => buscaVideo(evento))