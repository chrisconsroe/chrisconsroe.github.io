$(document).ready(function() {
	$('.nav-bar-icon').click(function() {
		$('.nav-bar-menu').toggleClass('hidden');
	});


	$(window).resize(function() {
		var width = $(window).width();
		if (width > 900) {
			$('.nav-bar-menu').addClass('hidden');
		}
	});
});
