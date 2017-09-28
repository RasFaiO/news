//barra de navegación
$(".button-collapse").sideNav()
//cantidad de texto de las noticias
$('.card-content>p').each(function(){
    $(this).html($(this).text().substring(0,230))
})
//carrusel de imágenes
$('.carousel.carousel-slider').carousel({fullWidth: true})
$('.carousel').carousel('next',0);