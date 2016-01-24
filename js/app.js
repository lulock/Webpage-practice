
//Hide message
$(".greeting span").hide();
$(".nav").hide();
//Include button
$(".greeting").append("<button class='enter'>Click Me :)</button>");
//When button is pressed
$("button").click(function(){
	//Reveal message
	console.log($(this).prev());
	$(this).prev().show();
	$(".nav").slideDown("slow");
	//Hide button
	$(this).hide();
});

var $select = $("<select></select>");

$(".nav").append($select);

$(".nav a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	};
	$option.val($anchor.attr("href"));
	$option.text($anchor.text());
	$select.append($option);
});

$select.click(function(){
	window.location = $select.val();
});