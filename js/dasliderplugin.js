(function($) {

	$.fn.dasliderplugin = function() {

	function slideSwitchPrev() {
    var $active = $('#slideshow DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshow DIV:last');


    var $previous =  $active.prev().length ? $active.prev()
        : $('#slideshow DIV:last');

    $active.addClass('last-active');

    $previous.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
function slideSwitchNext() {
    var $active = $('#slideshow DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshow DIV:last');


    var $next =  $active.next().length ? $active.next()
        : $('#slideshow DIV:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}



}
})(jQuery));