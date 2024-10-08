async function listaVideos(){
    let conexao = await fetch("http://localhost:3000/videos")
    let conexaoConvertida = await conexao.json();

    console.table(conexaoConvertida)
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

    let conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi ={
    listaVideos,
    criaVideos
}
