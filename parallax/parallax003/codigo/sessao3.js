document.addEventListener("scroll", function(){
    var container2 = document.querySelector(".container2");
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var distancia = container2.getBoundingClientRect().top;
    var alturaJanela = window.innerHeight;
    if (distancia < alturaJanela * 0.10){
        img1.style.transform = "translateX(-500px)";
        img2.style.transform = "translateX(500px)";
    }
    else{
        img1.style.transform = "translateX(0px)";
        img2.style.transform = "translateX(0px)";
    }
})
