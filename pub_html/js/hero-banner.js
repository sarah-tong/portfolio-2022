"use strict";
console.log('JS is running');

var homepageBio = document.querySelector(".brief-bio");

var viaBrief = document.querySelector(".VIA-brief");
var viaBanner = document.querySelector(".VIA-photo-popup");

var toyotaBrief = document.querySelector(".toyota-brief");
var toyotaBanner = document.querySelector(".toyota-photo-popup");

viaBrief.onmouseover = function () {
    viaBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('blue');
};

viaBrief.onmouseout = function () {
    viaBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('blue');
}

toyotaBrief.onmouseover = function () {
    toyotaBanner.classList.add('show');
    homepageBio.classList.add('hide');
    document.body.classList.add('red');
};

toyotaBrief.onmouseout = function () {
    toyotaBanner.classList.remove('show');
    homepageBio.classList.remove('hide');
    document.body.classList.remove('red');
}
