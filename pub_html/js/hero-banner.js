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

var railyardBrief = document.querySelector(".railyard-brief");
var railyardBanner = document.querySelector(".railyard-image-popup");
var railyardProjectWrapper = document.querySelector(".project-wrapper.railyard-brief ");

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
        //            viaProjectWrapper.classList.add('active');
    };

    viaBrief.onmouseout = function () {
        viaBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('blue-grey');
        navWrapper.classList.remove('blue-grey');
        //            viaProjectWrapper.classList.remove('active');
    }

    toyotaBrief.onmouseover = function () {
        toyotaBanner.classList.add('show');
        homepageBio.classList.add('hide');
        document.body.classList.add('red');
        navWrapper.classList.add('red');
        //            toyotaProjectWrapper.classList.add('active');
    };

    toyotaBrief.onmouseout = function () {
        toyotaBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('red');
        navWrapper.classList.remove('red');
        //            toyotaProjectWrapper.classList.remove('active');
    }

//    railyardBrief.onmouseover = function () {
//        railyardBanner.classList.add('show');
//        homepageBio.classList.add('hide');
//        document.body.classList.add('orange');
//        navWrapper.classList.add('orange');
//    };
//
//    railyardBrief.onmouseout = function () {
//        railyardBanner.classList.remove('show');
//        homepageBio.classList.remove('hide');
//        document.body.classList.remove('orange');
//        navWrapper.classList.remove('orange');
//    }

    intlCoopBrief.onmouseover = function () {
        intlCoopBanner.classList.add('show');
        homepageBio.classList.add('hide');
        document.body.classList.add('sfu-red');
        navWrapper.classList.add('sfu-red');
        //            intlCoopProjectWrapper.classList.add('active');
    };

    intlCoopBrief.onmouseout = function () {
        intlCoopBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('sfu-red');
        navWrapper.classList.remove('sfu-red');
        //            intlCoopProjectWrapper.classList.remove('active');
    }

    smaBrief.onmouseover = function () {
        smaBanner.classList.add('show');
        homepageBio.classList.add('hide');
        document.body.classList.add('blue');
        navWrapper.classList.add('blue');
        //            smaProjectWrapper.classList.add('active');
    };

    smaBrief.onmouseout = function () {
        smaBanner.classList.remove('show');
        homepageBio.classList.remove('hide');
        document.body.classList.remove('blue');
        navWrapper.classList.remove('blue');
        //            smaProjectWrapper.classList.remove('active');
    }
}

function removeHomepageBioHide() {
    viaBrief.onmouseover = function () {}
    viaBrief.onmouseout = function () {}
    toyotaBrief.onmouseover = function () {}
    toyotaBrief.onmouseout = function () {}
//    railyardBrief.onmouseover = function () {}
//    railyardBrief.onmouseout = function () {}
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
