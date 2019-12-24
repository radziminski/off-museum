import "../sass/main.scss";

import $ from 'jquery';


const elements = {
    body: $('body'),
    header: $('.header'),
    popUpNavIcon: $('.pop-up-nav__icon'),
    popUpNavCover: $('.pop-up-nav__cover'),
    popUpNavLinks: $('.pop-up-nav__links'),
    headingPrimaryMain: $('.heading-primary--main'),
    headingPrimarySub: $('.heading-primary--sub'),
    btnAnimation: $('.js--animate-1'),
    hidden: $('.u-hide'),
    loader: $('.loader-box'),
    reviewsButtonLeft: $('.js--reviews-left'),
    reviewsButtonRight: $('.js--reviews-right'),
    reviewsBox: $('.reviews-box__content'),
    review1: $('.js--review-1'),
    review2: $('.js--review-2'),
    review3: $('.js--review-3'),

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
img.onload = function() {
    console.log('Loaded')
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
    $('.hide-wrapper').css('visibility', 'visible');

}

function js_Load() {
    $('body').css('visibility', 'visible')
}

window.addEventListener('DOMContentLoaded', (event) => {
    DOMLoadFlag = true;
});

if (img.complete && DOMLoadFlag) {
    console.log('loaded')
    img.onload();
    setTimeout(() => {
        $('.loader-box').css('display', 'none');
    }, 50);
}





// Function allowing 'Smooth scrolling' when link is clicked
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    const target = $($.attr(this, 'href')).offset().top - 100;
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

// Reviews

let reviewIterator = 1;
const nextReview = () => {
    if (reviewIterator === 3) reviewIterator = 1;
    else reviewIterator++;
}
const prevReview = () => {
    if (reviewIterator === 1) reviewIterator = 3;
    else reviewIterator--;
}

const updateReview = (reviewIterator) => {
    switch (reviewIterator) {
        case 1:
            elements.review1.css({'display': 'inline-block'});
            elements.review2.css({'display': 'none'});
            elements.review3.css({'display': 'none'});
            break;
            
        case 2:
            elements.review2.css({'display': 'inline-block'});
            elements.review1.css({'display': 'none'});
            elements.review3.css({'display': 'none'});
            break;

        case 3:
            elements.review3.css({'display': 'inline-block'});
            elements.review2.css({'display': 'none'});
            elements.review1.css({'display': 'none'});
            break;
    }
    
}
updateReview(reviewIterator);

elements.reviewsButtonLeft.on('click', () => {
    prevReview();
    updateReview(reviewIterator);
});
elements.reviewsButtonRight.on('click', () => {
    nextReview();
    updateReview(reviewIterator);
});

// Menu icon
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

