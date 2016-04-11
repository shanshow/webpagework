var main = function() {
	$(".button").hover(function() {
    $(this).toggleClass("active");
		$(this).toggleClass("posmove");
  });




	$("#pictureRJ").hover(function() {
		$("#shooter").fadeToggle(600).toggleClass("displaynone");
	});
};


$(document).ready(main);
