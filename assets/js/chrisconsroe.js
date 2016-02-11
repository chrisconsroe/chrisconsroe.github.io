// smooth scroll function

var $root = $('html, body');
	$('.smoothScroll').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top - 50
	    }, 500);
	    return false;
	});
