var loaderAnimation;

function myFunction() {
    loaderAnimation = setTimeout(showPage, 1000);
}

function showPage() {
    document.querySelector('loader').classList.add('hide');
    document.querySelector('page-content').classList.add('show');
}

console.log("detected!");
