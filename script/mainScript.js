$(function(){
	$("body").hide();
	$(".about-me").hide();
	$(".resume").hide();
	$(".credits").hide();
	$("body").fadeIn(1000);
	
	$("#footer").hover(function() {
		$(".credits").fadeIn();
	},
	function() {
		$(".credits").fadeOut();
	});
});