var loaderAnimation;
var loader = document.querySelector(".loader");
var pageContent = document.querySelector(".page-content");;


// https://stackoverflow.com/questions/8492344/javascript-attach-an-onclick-event-to-all-links
// https://stackoverflow.com/questions/36125391/vanilla-js-delay-click-event-to-add-animation
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) links[i].onclick = function (e) {
    e.preventDefault(links[i]);
    loader.classList.add('show');
    setTimeout(function (url) {
        window.location = url
    }, 1500, this.href);
}

// https://www.w3schools.com/howto/howto_css_loader.asp
document.addEventListener('DOMContentLoaded', function () {
    loader.classList.add('show');
    loaderAnimation = setTimeout(showPage, 1500);

    function showPage() {
        loader.classList.remove('show');
//        pageContent.classList.add('show');
    }
});
