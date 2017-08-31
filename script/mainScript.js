$(function(){
	$("body").hide();
	$(".about-me").hide();
	$(".resume").hide();
	$(".credits").hide();
	$("body").fadeIn(1500);
	
	$("#footer").hover(function() {
		$(".credits").fadeIn(100);
	},
	function() {
		$(".credits").fadeOut(100);
	});
});