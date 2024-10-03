async function listaVideos(){
    let conexao = await fetch("http://localhost:3000/videos")
    let conexaoConvertida = await conexao.json();

    console.table(conexaoConvertida)
    return conexaoConvertida
}

export const conectaApi ={
    listaVideos
}
