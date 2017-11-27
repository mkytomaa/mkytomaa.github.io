$(document).ready(function(){

	/** Increase opacity of portfolio illustrations when hovering **/
	$(".illustration").hover(function() { // jQuery Function Number 1 .hover()
		$(this).addClass("opaque"); // jQuery Function Number 2 .addClass()
	},
		function() {
			$(this).removeClass("opaque"); // jQuery Function Number 3 .removeClass()
	});

	/** Enlarge illustrations once clicked **/
	$(".illustration").click(function() { // jQuery Function Number 4 .click()
		$(".illustration").css("width", "500px"); // jQuery Function Number 5 .css()
		$(this).css("width", "675px");
		$(this).addClass("opaque");
	});


	/** Fade in text on home page **/
	$("#markus-text").hide(); // jQuery Function Number 6 .hide()
	$("#underline-container").hide();
	$("#welcome-text").hide();
	$("#markus-text").fadeIn(); // jQuery Function Number 7 .fadeIn()
	$("#welcome-text").fadeIn();
	$("#underline-container").slideDown("slow"); // jQuery Function Number 8 .slideDown()
	$("#underline-container").fadeIn();

});