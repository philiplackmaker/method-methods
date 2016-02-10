$(document).ready(function(){
  $('.home-carousel').slick({
    dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
  });
});

$(document).ready(function(){
	$('#about').click(function(){
    // $('.info').animate({'top' : '100px'},1500);
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
