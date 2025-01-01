var texto = document.querySelector("#texto")
var foto7 = document.querySelector("#foto7")
var foto1 = document.querySelector("#foto1")
var foto4 = document.querySelector("#foto4")
var foto5 = document.querySelector("#foto5")

window.addEventListener("scroll", function() {
    var value = window.scrollY;

    texto.style.marginTop = value * 2.5 + "px";
    foto7.style.top = value * -1.5 + "px";
    foto7.style.marginLeft = value * 0.5 + "px"
    foto1.style.marginTop = value * 0.7 + "px"
    foto4.style.marginLeft= value * -2 + "px"
    foto5.style.marginLeft = value * 1.5 + "px"
})