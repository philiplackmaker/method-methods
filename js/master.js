


$(document).ready(function(){

  $('.home-carousel').slick({
    dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
  });

	$('#about').click(function(e){
    e.preventDefault();
    $('body').addClass('stop-scrolling');
    console.log('hi');
    $('.info').animate({'top' : '0px'},1000);
	});

  $('#close').click(function(e){
    e.preventDefault();
    $('body').removeClass('stop-scrolling');
    console.log('hi');
    $('.info').animate({'top' : '-1000px'},1000);
	});

});

// var feed = new Instafeed({
//     get: 'user',
//     tagName: 'awesome',
//     clientId: 'fe742be948e14625b25d7d07677c7003',
//     userId: '23449416',
// });
// feed.run();
//
//
// var feed = new Instafeed({
//        get: 'tagged',
//        tagName: 'awesome',
//        clientId: 'fe742be948e14625b25d7d07677c7003'
//    });
//    feed.run();
