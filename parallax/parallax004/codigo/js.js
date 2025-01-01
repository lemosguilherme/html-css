var bloco2 = document.querySelector(".bloco2")
var bloco1 = document.querySelector(".bloco1")
var bloco3 = document.querySelector(".bloco3")
window.addEventListener("scroll",function(){
    var valor = window.scrollY

    bloco2.style.marginTop = valor * 4 + "px"
    bloco1.style.marginLeft = valor * 10 + "px"
    bloco1.style.marginTop = valor * 2 + "px"

    bloco3.style.marginRight = valor * -2 + "px"
    bloco3.style.marginTop = valor * 2 + "px"
})