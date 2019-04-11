$(function() {
	var slider = $(".slider"),
		slides = slider.find('li'),
		nav = slider.find('nav');

    /*PARA SELECCIONAR LOS COMPONENTES DEL SLIDER*/
    
	slides.eq(0).addClass('current');

	nav.children('a').eq(0).addClass('current_dot');
    
    /*PARA RECORRER LOS PUNTOS DEL SLIDER*/

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('current_dot').siblings().removeClass('current_dot');
		slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});


	$('.boton').click(function(){
		$(location).attr('href',"../inicio.php");
	})
});

/* POR ULTIMO LOS EVENTOS QUE HACEN QUE FUNCIONEN LOS CONTROLES DEL SLIDER ;) */ 