//barra de navegación
$(".button-collapse").sideNav()
//cantidad de texto de las noticias
$('.card-content>p').each(function(){
    $(this).html($(this).text().substring(0,230))
})

$(document).ready(function(){
    $('.slider').slider();
});
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');

$(document).ready(function(){
    $('.parallax').parallax();
});