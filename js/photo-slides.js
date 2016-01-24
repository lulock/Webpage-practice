var images = [];

$.ajax({
	url:'http://api.tumblr.com/v2/blog/leilascollection.tumblr.com/posts/photo',
	method: 'GET',
	data: 
	{
		api_key: 'YeTpPVFopzz4IgtilVd3RMT3RIOlvHF3kvNAO3NA44WLJjFziV',
		jsonp: 'getPhotoLink'},
	dataType: 'jsonp'
});


function getPhotoLink(response){
	var posts = response.response.posts;
	var imgHTTP ='';
	$.each(posts, function(i, post){
		var photos = posts[i].photos;
		$.each(photos, function(i, photo){
			var img = photo;
			var imgurl = img.original_size.url;
			imgHTTP += ('<div class="gallery"><img src="' + imgurl + '" height="350" alt="" class="avatar"></div>');
		});
	});
		document.getElementById('gallery').innerHTML = imgHTTP;
		$('.photo-slides').slick({fade:true, autoplay:true, autoplaySpeed:2000});
	}	

function overlaySetup(){
	var $overlay = $('<div id="overlay"></div>');
	var $image =  $("<img >");
	//append image to overlay
	$overlay.append($image);

	//add overlay to body!
	$("body").append($overlay);

	//when image is selected
	$(".imageGallery a").click(function(event){
		//prevent redirection to link
		event.preventDefault();

		var imageLocation = $(this).attr("href");
		$image.attr("src", imageLocation);
		$image.attr('style', "max-width: 65%; max-height: 75%");
		$overlay.fadeIn('slow');
	});

	$overlay.click(function(){
		$overlay.fadeOut('slow');
	});
}