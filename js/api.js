
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
    h6 = document.createElement('h6');
    span = document.createElement('span');
    a = document.createElement('a');
    a_figure = document.createElement('a');

    a.setAttribute("href", noticias.link);
    a_figure.setAttribute("href", noticias.link);

    
    span.innerHTML = "Fonte: ";
    h6.innerHTML = noticias.title;
    a.innerHTML = noticias.creator;
    img.setAttribute("src", "gif/cristiano-camera.gif");
    
    
    span.appendChild(a);
    figcaption.appendChild(h6);
    figcaption.appendChild(span);
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
    for(i=0;i<10;i++){
        let linha = criaLinha(noticias.results[i]);
        tabela.appendChild(linha);
    }

}

main();

function limpar(input){
    input.value = "";
}

var pesquisa;

const form = document.querySelector(".barra");

form.addEventListener('submit', e => {
    e.preventDefault()
    let input = document.querySelector("#barra-pesquisa");
    console.log(input.value);
    limpar(input);
})


const form_dois = document.querySelector(".avaliacao");


form_dois.addEventListener("submit", (e)=>{
    e.preventDefault();
    let select = document.querySelector("#classificacao");
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    console.log(select.input);
    console.log(select);
})