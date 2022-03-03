document.addEventListener('DOMContentLoaded', function () {
    var pageAnimation = setTimeout(showPage, 1000);

    function showPage() {
        document.querySelector(".page-content").classList.add('show');
    }
});
