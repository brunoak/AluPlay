async function listaVídeos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    console.table(conexaoConvertida)

    return conexaoConvertida
}

async function criaVideo(video, imagem, url, descricao ) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            video: video,
            imagem: imagem,
            url: url,
            descricao: `${descricao} mil visualizações`
        })
    })

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}


export const conectaApi = {
    listaVídeos,
    criaVideo
}

