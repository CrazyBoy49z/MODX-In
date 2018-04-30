$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');
    $('.sidenav').sidenav();

  } else {
    // change functionality for larger screens
  }
});



function cssParallax(cont, el, radiusVal){
  $(cont).mousemove(function(event) {
      
      cx = Math.ceil($(window).width() / 2);
      cy = Math.ceil($(window).height() / .5);
      dx = event.pageX - cx;
      dy = event.pageY - cy;
      
      tiltx = (dy / cy);
      tilty = - (dx / cx);
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);

      $(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
      $(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  });
}

$(document).ready(function() {
  cssParallax('body', '.parallax-base', 20);
  cssParallax('.parallax-container.first', '.parallax-base', 20);
});






$(document).ready(function(){
		$('.sidenav').sidenav();
		$('.tabs').tabs();
		$('.modal').modal({
			inDuration: 500,
			startingTop: '50%',
			endingTop: '0%'
		});
		$('.timepicker').timepicker();
		$('.datepicker').datepicker({
			i18n: {
				weekdaysAbbrev: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
				autoClose: true,
				cancel: 'Закрыть',
				weekdaysShort: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
				months: [
					'Январь',
					'Февраль',
					'Март',
					'Апрель',
					'Май',
					'Июнь',
					'Июль',
					'Август',
					'Сентябрь',
					'Октябрь',
					'Ноябрь',
					'Декабрь'
				],
				monthsShort:[
					'Январь',
					'Февраль',
					'Март',
					'Апрель',
					'Май',
					'Июнь',
					'Июль',
					'Август',
					'Сентябрь',
					'Октябрь',
					'Ноябрь',
					'Декабрь'
				]
			},
			
		});
	});
	
	function initMap() {
		var myLatLng = {lat: 55.859102, lng: 37.474239};
	
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: myLatLng
		});
	
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'ЖКХ'
		});
	}


