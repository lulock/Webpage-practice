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

$select.change(function(){
	window.location = $select.val();
});