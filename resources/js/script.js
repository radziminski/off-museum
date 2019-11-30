var src = $('header').css('background-image');

urlSrc = src.slice(56, src.length);
var url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
var img = new Image();
img.onload = function() {
    console.log('image loaded')
}
img.src = url;
if (img.complete) img.onload();

$(document).ready(function() {
    console.log('hello');

    // Stivy Nav Fade Animation
    $('.js--section-about').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
            $('.sticky').removeClass('animated fadeOutUp');
            $('.sticky').addClass('animated fadeInDown');
            console.log('activated down');
        } else {
            $('.sticky').removeClass('animated fadeInDown');
            $('.sticky').addClass('animated fadeOutUp');
           
            console.log('activated up');
        }
    }, {
        offset: '65%'
    });

    $('header').waypoint(function(direction) {
        if(direction == 'up') {
            $('.sticky').removeClass('animated fadeOutUp');
            $('nav').removeClass('sticky');
            console.log('activated up removal');
        }

    }, {
        offset: '-10%;'
    });

});
