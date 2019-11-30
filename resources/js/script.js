
// Waiting for background Image
var src = $('header').css('background-image');

urlSrc = src.slice(56, src.length);
var url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
var img = new Image();
img.onload = function() {
    console.log('loadeda')
    $('heading-primary--main').addClass('animateLeft');
    $('heading-primary--sub').addClass('animateRight');
    $('js--animate-1').addClass('animateBottom');
}
img.src = url;
if (img.complete) img.onload();
