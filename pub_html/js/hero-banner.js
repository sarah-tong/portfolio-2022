"use strict";

// https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
//window.onpageshow = function (event) {
//    if (event.persisted) {
//        window.location.reload()
//    }
//};

var homepageBio = document.querySelector(".brief-bio");
var navWrapper = document.querySelector(".nav-wrapper");

var viaBrief = document.querySelector(".VIA-brief");
var viaBanner = document.querySelector(".VIA-image-popup");
var viaProjectWrapper = document.querySelector(".project-wrapper.VIA-brief ");

var toyotaBrief = document.querySelector(".toyota-brief");
var toyotaBanner = document.querySelector(".toyota-image-popup");
var toyotaProjectWrapper = document.querySelector(".project-wrapper.toyota-brief ");

var rcpBrief = document.querySelector(".rcp-brief");
var rcpBanner = document.querySelector(".rcp-image-popup");
var rcpProjectWrapper = document.querySelector(".project-wrapper.rcp-brief ");

var railyardBrief = document.querySelector(".railyard-brief");
var railyardBanner = document.querySelector(".railyard-image-popup");
var railyardProjectWrapper = document.querySelector(".project-wrapper.railyard-brief ");

var knackBrief = document.querySelector(".knack-brief");
var knackBanner = document.querySelector(".knack-image-popup");
var knackProjectWrapper = document.querySelector(".project-wrapper.knack-brief ");

var intlCoopBrief = document.querySelector(".intl-coop-brief");
var intlCoopBanner = document.querySelector(".intl-coop-image-popup");
var intlCoopProjectWrapper = document.querySelector(".project-wrapper.intl-coop-brief ");

var smaBrief = document.querySelector(".sma-brief");
var smaBanner = document.querySelector(".sma-image-popup");
var smaProjectWrapper = document.querySelector(".project-wrapper.sma-brief ");

function showImagePopup() {
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
    
    rcpBrief.onmouseover = function () {
        rcpBanner.classList.add('show');
        homepageBio.classList.add('hide');
        document.body.classList.add('rcp-orange');
        navWrapper.classList.add('rcp-orange');
    };

    rcpBrief.onmouseout = function () {
        rcpBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('rcp-orange');
        navWrapper.classList.remove('rcp-orange');
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
    
    knackBrief.onmouseover = function () {
        knackBanner.classList.add('show');
        homepageBio.classList.add('hide');
        document.body.classList.add('knack-red');
        navWrapper.classList.add('knack-red');
    };
    
    knackBrief.onmouseout = function () {
        knackBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('knack-red');
        navWrapper.classList.remove('knack-red');
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
}

function removeHomepageBioHide() {
    viaBrief.onmouseover = function () {}
    viaBrief.onmouseout = function () {}
    toyotaBrief.onmouseover = function () {}
    toyotaBrief.onmouseout = function () {}
    rcpBrief.onmouseover = function () {}
    rcpBrief.onmouseout = function () {}
    railyardBrief.onmouseover = function () {}
    railyardBrief.onmouseout = function () {}
    knackBrief.onmouseover = function () {}
    knackBrief.onmouseout = function () {}
    intlCoopBrief.onmouseover = function () {}
    intlCoopBrief.onmouseout = function () {}
    smaBrief.onmouseover = function () {}
    smaBrief.onmouseout = function () {}
}

showImagePopup();

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        showImagePopup();
    } else {
        removeHomepageBioHide();
    }
});
