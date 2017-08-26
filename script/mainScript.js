$(function(){
	$("body").hide();
	$(".credits").hide();
	$("body").fadeIn(1000);
	
	$("#footer").hover(function() {
		$(".credits").show();
	},
	function() {
		$(".credits").hide();
	});
});