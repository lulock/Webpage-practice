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
	var imgHTTP = '<ul class="imageGallery"> <h1>Image Gallery</h1>'
	$.each(posts, function(i, post){
		var photos = posts[i].photos;
		$.each(photos, function(i, photo){
			var img = photo;
			var imgurl = img.original_size.url;
			imgHTTP += ('<li><a href= "' + imgurl + '"><img src="' + imgurl + '" height="100" alt=""></a></li>');
		});
	});
	imgHTTP += '</ul>';
		document.getElementById('gallery').innerHTML = imgHTTP;
		overlaySetup();
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

$('photo-slides').slick({fade:true, autoplay:true, autoplaySpeed:2000, dots:true, arrows:false });