// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {
    var pos = $('#navbar').position();

    $('#navbar').css('position', 'fixed');
    $('#navbar').css('top', pos.top);
  
    $('#masthead').css('top', pos.top + $('#navbar').height());
    $('#main').css('margin-top', pos.top + $('#masthead').height() + $('#navbar').height());

    $.jInvertScroll(['.site-main'], // an array containing the selector(s) for the elements you want to animate
            {
                height: 500, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                    var size = 1600;
                    var blur = percent * 100;
                    size = size - (percent * 100.00);
                    $('#masthead').css('background-size', size);
                    if (blur < 3) {
                        $('#masthead').css('-webkit-filter', 'blur(' + (blur) + 'px)')
                    }
                    //console.log(percent);
                }
            });

});