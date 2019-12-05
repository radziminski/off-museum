
// Waiting for background Image
const src = $('header').css('background-image');
let urlSrc = src.slice(56, src.length);
const url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
const img = new Image();
const startTime = new Date();
let DOMLoadFlag = false;
let imageLoadFlag = false;
img.onload = function() {
    const endTime = new Date();
    const loadTime = endTime - startTime;
    if (loadTime < 600) {
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
window.addEventListener('DOMContentLoaded', (event) => {
    DOMLoadFlag = true;
});

if (img.complete && DOMLoadFlag) img.onload();

setTimeout(() => {
    $('.loader-box').css('display', 'none');
}, 50);



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var target = $($.attr(this, 'href')).offset().top - 70;
    console.log(target)
    $('html, body').animate({
        scrollTop: target,
    }, 500);
});

const elements = {
    body: $('body'),
    popUpNavIcon: $('.pop-up-nav__icon'),
    popUpNavCover: $('.pop-up-nav__cover'),
    popUpNavLinks: $('.pop-up-nav__links'),
}

console.log(elements)

elements.popUpNavIcon.on('click', () => {
    elements.popUpNavIcon.toggleClass('pop-up-nav__icon--active');
    if (elements.popUpNavCover.css('opacity') > 0) {
        elements.popUpNavCover.css({'display': 'none', 'opacity' : 0});

    } else {
        elements.popUpNavCover.css({'display': 'block', 'opacity' : 1});

    };
});

elements.popUpNavCover.on('click', () => {
    elements.popUpNavCover.css({'display': 'none', 'opacity' : 0});

    elements.popUpNavIcon.toggleClass('pop-up-nav__icon--active');
});

if (window.innerWidth >= 900) {
    if (window.scrollY < 500) elements.popUpNavIcon.css({'display': 'none'});
    window.addEventListener("scroll",() => { 
        if (window.scrollY > 500) {
            elements.popUpNavIcon.css({'display': 'block'});
        } else {
            elements.popUpNavIcon.css({'display': 'none'});
        }
    }, false);
} else {
    if (window.scrollY < 200) elements.popUpNavIcon.css({'background-color': 'transparent'});
    window.addEventListener("scroll",() => { 
        if (window.scrollY > 200) {
            elements.popUpNavIcon.css({'background-color': '#BF045B'});
        } else {
            elements.popUpNavIcon.css({'background-color': 'transparent'});
        }
    }, false);
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        if (window.scrollY < 500) elements.popUpNavIcon.css({'display': 'none'});
        else elements.popUpNavIcon.css({'display': 'block'});
    } else {
        elements.popUpNavIcon.css({'display': 'block'});
        if (window.scrollY < 200) elements.popUpNavIcon.css({'background-color': 'transparent'});
        else elements.popUpNavIcon.css({'background-color': '#BF045B'});
    }
})

