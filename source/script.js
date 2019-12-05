
const elements = {
    body: $('body'),
    popUpNavIcon: $('.pop-up-nav__icon'),
    popUpNavCover: $('.pop-up-nav__cover'),
    popUpNavLinks: $('.pop-up-nav__links'),
    headingPrimaryMain: $('.heading-primary--main'),
    headingPrimarySub: $('.heading-primary--sub'),
    btnAnimation: $('.js--animate-1'),
    hidden: $('.u-hide'),
    loader: $('.loader-box'),

}


// Code displaying loader until the bacground image is loaded:
const src = $('header').css('background-image');
// Getting only url, (whole bg has also linear gradient)
let urlSrc = src.slice(56, src.length);
const url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

const img = new Image();
const startTime = new Date();
let DOMLoadFlag = false;
let imageLoadFlag = false;
img.src = url;

// If both image and site is ready to show:
if (img.complete && DOMLoadFlag) img.onload();

setTimeout(() => {
    $('.loader-box').css('display', 'none');
}, 50);

window.addEventListener('DOMContentLoaded', (event) => {
    DOMLoadFlag = true;
});

img.onload = function() {
    const endTime = new Date();
    const loadTime = endTime - startTime;
    if (loadTime < 600) {
        elements.hidden.css('transition', 'none');
        elements.loader.css('transition', 'none');
    }

    elements.headingPrimaryMain.addClass('animateLeft');
    elements.headingPrimaryMain.css('opacity', 1);
    elements.headingPrimarySub.addClass('animateRight');
    elements.headingPrimarySub.css('opacity', 1);
    elements.btnAnimation.addClass('animateBottom');
    elements.btnAnimation.css('opacity', 1);
    elements.hidden.css('opacity', 1);
    elements.loader.css('opacity', 0);
}


// Function allowing 'Smooth scrolling' when link is clicked
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    const target = $($.attr(this, 'href')).offset().top - 70;
    $('html, body').animate({
        scrollTop: target,
    }, 500);
});

// Displaying / hiding navigation icon 
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

