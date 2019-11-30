
// Waiting for background Image
var src = $('header').css('background-image');
urlSrc = src.slice(56, src.length);
var url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
var img = new Image();
img.onload = function() {
    console.log('loadeda')
    $('.heading-primary--main').addClass('animateLeft');
    $('.heading-primary--main').css('opacity', 1);
    $('.heading-primary--sub').addClass('animateRight');
    $('.heading-primary--sub').css('opacity', 1);
    $('.js--animate-1').addClass('animateBottom');
    $('.js--animate-1').css('opacity', 1);
    $('.header__nav').removeClass('u-hide');
}
img.src = url;
if (img.complete) img.onload();
