
const figure0 = document.querySelector(".one");
const figure1 = document.querySelector(".two");
const figure2 = document.querySelector(".three");

/*function selecionado(number){
    if(number == 0){
        if(!figure0.classList.contains("selecionado")){
            figure0.classList.add("selecionado");
            figure1.classList.remove("selecionado");
            figure2.classList.remove("selecionado");
        }
    }
    if(number == 1){
        if(!figure1.classList.contains("selecionado")){
            figure0.classList.remove("selecionado");
            figure1.classList.add("selecionado");
            figure2.classList.remove("selecionado");
        }
    }
    if(number == 2){
        if(!figure2.classList.contains("selecionado")){
            figure0.classList.remove("selecionado");
            figure1.classList.remove("selecionado");
            figure2.classList.add("selecionado");
        }
    }
}
*/

function teste2(classe, one, two, three){
    if(!document.querySelector(one).classList.contains(classe)){
        document.querySelector(one).classList.add(classe);
        document.querySelector(two).classList.remove(classe);
        document.querySelector(three).classList.remove(classe);
    }
}


function teste(classe, one, two){
    if(!document.querySelector(one).classList.contains(classe)){
        document.querySelector(one).classList.add(classe);
        document.querySelector(two).classList.remove(classe);
    }
}
