
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

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
