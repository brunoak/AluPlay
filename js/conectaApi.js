async function listaVideos(){
    let conexao = await fetch("http://localhost:3000/videos")
    let conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function criaVideos(titulo, descricao, url, imagem) {
    let conexao = await fetch("http://localhost:3000/videos",{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            titulo: titulo,
            descricao:`${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })    
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o video");
    }

    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function pesquisaVideos(param) {
    let conexao = await fetch(`http://localhost:3000/videos?q=${param}`)
    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi ={
    listaVideos,
    criaVideos,
    pesquisaVideos
}
