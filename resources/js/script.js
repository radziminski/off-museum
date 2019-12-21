// CODE COMPILED WITH BABEL
"use strict";

var elements = {
  body: $('body'),
  popUpNavIcon: $('.pop-up-nav__icon'),
  popUpNavCover: $('.pop-up-nav__cover'),
  popUpNavLinks: $('.pop-up-nav__links'),
  headingPrimaryMain: $('.heading-primary--main'),
  headingPrimarySub: $('.heading-primary--sub'),
  btnAnimation: $('.js--animate-1'),
  hidden: $('.u-hide'),
  loader: $('.loader-box')
}; // Code displaying loader until the bacground image is loaded:

var src = $('header').css('background-image'); // Getting only url, (whole bg has also linear gradient)

var urlSrc = src.slice(56, src.length);
var url = urlSrc.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
var img = new Image();
var startTime = new Date();
var DOMLoadFlag = false;
var imageLoadFlag = false;
// Function allowing 'Smooth scrolling' when link is clicked
// Displaying / hiding navigation icon 
img.src = url, img.complete && DOMLoadFlag && img.onload(), setTimeout(function () {
  $('.loader-box').css('display', 'none');
}, 50), window.addEventListener('DOMContentLoaded', function (event) {
  DOMLoadFlag = true;
}), img.onload = function () {
  var endTime = new Date();
  var loadTime = endTime - startTime;
  loadTime < 600 && (elements.hidden.css('transition', 'none'), elements.loader.css('transition', 'none')), elements.headingPrimaryMain.addClass('animateLeft'), elements.headingPrimaryMain.css('opacity', 1), elements.headingPrimarySub.addClass('animateRight'), elements.headingPrimarySub.css('opacity', 1), elements.btnAnimation.addClass('animateBottom'), elements.btnAnimation.css('opacity', 1), elements.hidden.css('opacity', 1), elements.loader.css('opacity', 0);
}, $(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  var target = $($.attr(this, 'href')).offset().top - 70;
  $('html, body').animate({
    scrollTop: target
  }, 500);
}), elements.popUpNavIcon.on('click', function () {
  elements.popUpNavIcon.toggleClass('pop-up-nav__icon--active'), elements.popUpNavCover.css('opacity') > 0 ? elements.popUpNavCover.css({
    'display': 'none',
    'opacity': 0
  }) : elements.popUpNavCover.css({
    'display': 'block',
    'opacity': 1
  });
  ;
}), elements.popUpNavCover.on('click', function () {
  elements.popUpNavCover.css({
    'display': 'none',
    'opacity': 0
  }), elements.popUpNavIcon.toggleClass('pop-up-nav__icon--active');
}), window.innerWidth >= 900 ? (window.scrollY < 500 && elements.popUpNavIcon.css({
  'display': 'none'
}), window.addEventListener("scroll", function () {
  window.scrollY > 500 ? elements.popUpNavIcon.css({
    'display': 'block'
  }) : elements.popUpNavIcon.css({
    'display': 'none'
  });
}, false)) : (window.scrollY < 200 && elements.popUpNavIcon.css({
  'background-color': 'transparent'
}), window.addEventListener("scroll", function () {
  window.scrollY > 200 ? elements.popUpNavIcon.css({
    'background-color': '#BF045B'
  }) : elements.popUpNavIcon.css({
    'background-color': 'transparent'
  });
}, false)), window.addEventListener('resize', function () {
  window.innerWidth >= 900 ? window.scrollY < 500 ? elements.popUpNavIcon.css({
    'display': 'none'
  }) : elements.popUpNavIcon.css({
    'display': 'block'
  }) : (elements.popUpNavIcon.css({
    'display': 'block'
  }), window.scrollY < 200 ? elements.popUpNavIcon.css({
    'background-color': 'transparent'
  }) : elements.popUpNavIcon.css({
    'background-color': '#BF045B'
  }));
});