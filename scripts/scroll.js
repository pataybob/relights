let header = document.querySelector ('.header');
let headerH = document.querySelector('.header').clientHeight;


document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH){
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');

    }
}