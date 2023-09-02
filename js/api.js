
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send();
    return request.responseText
}

function criaLinha(noticias){
    linha = document.createElement('td');
    figure = document.createElement('figure');
    figcaption = document.createElement('figcaption');
    img = document.createElement("img");

    figcaption.innerHTML = noticias.title;
    img.setAttribute("src", "gif/cristiano-camera.gif");
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    linha.appendChild(figure);

    linha.classList.add("conteudo");
    return linha;
}

function main(){
    data = fazGet("https://newsdata.io/api/1/news?apikey=pub_28681a4b755d985bb0071abbc6c7dea4fc690&q=brasil");
    noticias = JSON.parse(data)
    let tabela = document.querySelector("#tabela");
    console.log(tabela);
    for(i=0;i<10;i++){
        let linha = criaLinha(noticias.results[i]);
        tabela.appendChild(linha);
    }

}

main();
