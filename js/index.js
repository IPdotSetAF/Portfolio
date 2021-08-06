window.onload =function (ev) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
}