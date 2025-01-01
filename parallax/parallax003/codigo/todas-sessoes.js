document.addEventListener("scroll", function(){
    var container0 = document.querySelector(".container0");
    var capa = document.querySelector(".capa1");
    var distancia = container0.getBoundingClientRect().top;
    var alturaJanela = window.innerHeight;
    if (distancia < alturaJanela * 0.10){
        container0.style.opacity = "1"
    }
    else {
        container0.style.opacity = "0.1"
    }
})
