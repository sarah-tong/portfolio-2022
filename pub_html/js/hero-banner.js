"use strict";
console.log('JS is running');

var homepageBio = document.querySelector(".brief-bio");
var navWrapper = document.querySelector(".nav-wrapper");

var viaBrief = document.querySelector(".VIA-brief");
var viaBanner = document.querySelector(".VIA-photo-popup");

var toyotaBrief = document.querySelector(".toyota-brief");
var toyotaBanner = document.querySelector(".toyota-photo-popup");

var railyardBrief = document.querySelector(".railyard-brief");
var railyardBanner = document.querySelector(".railyard-photo-popup");

var intlCoopBrief = document.querySelector(".intl-coop-brief");
var intlCoopBanner = document.querySelector(".intl-coop-photo-popup");

var smaBrief = document.querySelector(".sma-brief");
var smaBanner = document.querySelector(".sma-photo-popup");

viaBrief.onmouseover = function () {
    viaBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('blue-grey');
    navWrapper.classList.add('blue-grey');
};

viaBrief.onmouseout = function () {
    viaBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('blue-grey');
    navWrapper.classList.remove('blue-grey');
}

toyotaBrief.onmouseover = function () {
    toyotaBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('red');
    navWrapper.classList.add('red');
};

toyotaBrief.onmouseout = function () {
    toyotaBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('red');
    navWrapper.classList.remove('red');
}

railyardBrief.onmouseover = function () {
    railyardBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('orange');
    navWrapper.classList.add('orange');
};

railyardBrief.onmouseout = function () {
    railyardBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('orange');
    navWrapper.classList.remove('orange');
}

intlCoopBrief.onmouseover = function () {
    intlCoopBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('sfu-red');
    navWrapper.classList.add('sfu-red');
};

intlCoopBrief.onmouseout = function () {
    intlCoopBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('sfu-red');
    navWrapper.classList.remove('sfu-red');
}

smaBrief.onmouseover = function () {
    smaBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('blue');
    navWrapper.classList.add('blue');
};

smaBrief.onmouseout = function () {
    smaBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('blue');
    navWrapper.classList.remove('blue');
}