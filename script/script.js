// Comando de menu/navbar
$('.barra-btn').click(function(){
    $('.barra .menu').toggleClass("active");
    $('.barra-btn i').toggleClass("active");
});
/* Letras que se mueven */
var typed = new Typed(".prueba2", {
    strings: ["website.", "portafolio."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(window).on("load", function(){
    $('.loader').delay(2500).fadeOut(200)
});
