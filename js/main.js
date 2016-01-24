$('.animsition').animsition({
	inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'website a'
});

$('.nav').sticky();
$('.nav').on('sticky-start', function(){
	$('.nav').css("background-color", "rgba(245,245,245, 0.9)");
	$('.nav li a').css("color", "black");

});

$('.nav').on('sticky-end', function(){
	$('.nav').css("background-color", "rgba( 37,87,119, 0.5)");
	$('.nav li a').css("color", "#dae1e4");
});

// $(".nav-wrapper").mouseenter( function(){
// 	$(".nav").slideDown();
// }).mouseleave(function(){
// 	$(".nav").slideUp();
// });