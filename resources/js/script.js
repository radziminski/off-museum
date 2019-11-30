
// Waiting for background Image
const src = $('header').css('background-image');
urlSrc = src.slice(56, src.length);
const url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
const img = new Image();
const startTime = new Date();

img.onload = function() {
    console.log('loadeda')
    const endTime = new Date();
    const loadTime = endTime - startTime;
    if (loadTime < 1000) {
        $('.u-hide').css('transition', 'none');
        $('.loader-box').css('transition', 'none');
    }

    $('.heading-primary--main').addClass('animateLeft');
    $('.heading-primary--main').css('opacity', 1);
    $('.heading-primary--sub').addClass('animateRight');
    $('.heading-primary--sub').css('opacity', 1);
    $('.js--animate-1').addClass('animateBottom');
    $('.js--animate-1').css('opacity', 1);
    //$('.header__nav').removeClass('u-hide');
    $('.u-hide').css('opacity', 1);
    $('.loader-box').css('opacity', 0);
}
img.src = url;
if (img.complete) img.onload();
