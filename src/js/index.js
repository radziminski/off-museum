// Webpack imports
import "../sass/main.scss";

// JS imports
import $ from 'jquery';

// === Constants ===
// DOM Elements used later
const elements = {
    body: $('body'),
    header: $('.header'),
    popUpNavIcon: $('.pop-up-nav__icon'),
    popUpNavCover: $('.pop-up-nav__cover'),
    popUpNavLinks: $('.pop-up-nav__links'),
    headingPrimaryMain: $('.heading-primary--main'),
    headingPrimarySub: $('.heading-primary--sub'),
    btnAnimation: $('.js--animate-1'),
    hideWrapper: $('.js--wrapper'),
    loader: $('.loader-box'),
    reviewsButtonLeft: $('.js--reviews-left'),
    reviewsButtonRight: $('.js--reviews-right'),
    reviewsBox: $('.reviews-box__content'),
    review1: $('.js--review-1'),
    review2: $('.js--review-2'),
    review3: $('.js--review-3'),
}

const colors = {
    primary: '#BF045B', 
}

// Function handling FOUC
document.onreadystatechange = function() { 
    if (document.readyState === "complete") {

        elements.btnAnimation.addClass('animateBottom');
        elements.btnAnimation.css('opacity', 1);
        elements.loader.css('display', 'none');
        elements.hideWrapper.css('visibility', 'visible');
        elements.hideWrapper.css('opacity', '1');
    }
}

// Function allowing 'Smooth scrolling' when link is clicked
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    const scrollOffset = (($(window).height() - $($.attr(this, 'href')).outerHeight()) / 2);
    let target = $($.attr(this, 'href')).offset().top - scrollOffset;
    if (scrollOffset <= 0) target = $($.attr(this, 'href')).offset().top;
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
            elements.review1.css({'opacity': 1});
            elements.review2.css({'opacity': 0});
            elements.review3.css({'opacity': 0});
            break;
            
        case 2:
            elements.review1.css({'opacity': 0});
            elements.review2.css({'opacity': 1});
            elements.review3.css({'opacity': 0});
            break;

        case 3:
            elements.review1.css({'opacity': 0});
            elements.review2.css({'opacity': 0});
            elements.review3.css({'opacity': 1});
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
    let scrollAmount = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    if (scrollAmount < 500) elements.popUpNavIcon.css({'display': 'none'});
    window.addEventListener("scroll",() => { 
        scrollAmount = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollAmount > 500) {
            elements.popUpNavIcon.css({'display': 'block'});
        } else {
            elements.popUpNavIcon.css({'display': 'none'});
        }
    }, false);
} else {
    let scrollAmount = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    if (scrollAmount < 200) elements.popUpNavIcon.css({'background-color': 'transparent'});
    window.addEventListener("scroll",() => { 
        scrollAmount = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollAmount > 200) {
            elements.popUpNavIcon.css({'background-color': colors.primary});
        } else {
            elements.popUpNavIcon.css({'background-color': 'transparent'});
        }
    }, false);
}

window.addEventListener('resize', () => {
    const scrollAmount = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    if (window.innerWidth >= 900) {
        if (scrollAmount < 500) elements.popUpNavIcon.css({'display': 'none'});
        else elements.popUpNavIcon.css({'display': 'block'});
    } else {
        elements.popUpNavIcon.css({'display': 'block'});
        if (scrollAmount < 200) elements.popUpNavIcon.css({'background-color': 'transparent'});
        else elements.popUpNavIcon.css({'background-color': colors.primary});
    }
})